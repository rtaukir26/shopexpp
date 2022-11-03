import React, { useState } from "react";
import './post.css';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../footer/Footer";
// import Home from "../home/Home";

const Post = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [name, setName] = useState({ fname: "", lname: "" });
  // const [name, setName] = useState("");
  const [userName, setUserName] = useState([{ fName: "", lName: "" }]);
  const [editNameId, setEditNameId] = useState(null);

  //submitting items
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      let updateItem = items.map((item) => {
        if (item.id === editId) {
          return { ...item, input };
        }
        return item;
      });
      setItems(updateItem);
      setEditId(null);
      setInput("");
    } else {
      setItems((oldItems) => [
        ...oldItems,
        { input, id: new Date().getTime() },
      ]);
      setInput("");
    }
  };

  //Deleting items
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  //Editing items
  const editItem = (id, itemName) => {
    setEditId(id);
    setInput(itemName);
  };

  //============Multi input handler starts====================
  //inputHandler
  const handleInput = (e) => {
    const { name, value } = e.target;
    // const name=e.target.name;
    // const value=e.target.value;
    setName((prev) => {
      return { ...prev, [name]: value };
    });
  };

  //userSubmitHandler
  const userSubmitHandler = (e) => {
    e.preventDefault();
    if (editNameId) {
      let updateName = userName.map((names) => {
        // console.log(names.id === editNameId);
        if (names.id === editNameId) {
          return { ...names, fName: name.fname, lName: name.lname };
        }
        return names;
      });
      setUserName(updateName);
      setEditNameId(null);
      setName({ fname: "", lname: "" });
      // console.log(updateName);
    } else {
      setUserName((oldNames) => [
        ...oldNames,
        { fName: name.fname, lName: name.lname, id: userName.length + 1 },
      ]);
      setName({ fname: "", lname: "" });
    }
  };

  //Deleting name
  const deleteNameOnclick = (id) => {
    setUserName(userName.filter((name) => name.id !== id));
    // console.log(id);
  };

  //Editing name
  const editNameOnclick = (id, fname, lname) => {
    setName({ fname: fname, lname: lname });
    setEditNameId(id);
  };
  //============Multi input handler ends======================

  return (
    <>
      <Navbar />
      <div className="mt-5 d-flex justify-content-around vh-100">
        <div className="form_div">
          <h5>your details</h5>
          <form onSubmit={userSubmitHandler}>
            <input
              type="text"
              name="fname"
              placeholder="First name"
              className="item_input mt-1"
              value={name.fname}
              onChange={handleInput}
            />
            <input
              type="text"
              name="lname"
              placeholder="Last name"
              className="item_input mt-1"
              value={name.lname}
              onChange={handleInput}
            />
            <button className="addBtn_item" type="submit">
              <i className="fa-solid fa-plus"></i>
            </button>
          </form>
          <div className="mt-5">
            <h5>User Detailes</h5>
            {userName.length > 0 ? (
              <div>
                {userName?.map((name) => (
                  <div
                    className="bg-info m-1 d-flex justify-content-between"
                    key={name.id}
                  >
                    <div className="d-flex">
                      <p> {name.fName} </p>
                      <p> {name.lName} </p>
                    </div>

                    <div>
                      <i
                        className=" mx-1 fa-solid fa-pen-to-square btn_edit"
                        onClick={() =>
                          editNameOnclick(name.id, name.fName, name.lName)
                        }
                      ></i>
                      <i
                        className=" mx-1 fa-solid fa-trash btn_delete"
                        onClick={() => deleteNameOnclick(name.id)}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>

        {/* ----------------------------------Todo list starts------------------------------------------ */}
        <div className="form_div">
          <h5>Add your items</h5>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="item_input"
              placeholder="Enter item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="addBtn_item" type="submit">
              <i className="fa-solid fa-plus"></i>
            </button>
          </form>
        </div>
        <div className="w-50">
          {items.map((item) => (
            <div
              key={item.id}
              className="post_item_div d-flex justify-content-between p-1 m-1"
            >
              <p>{item.input}</p>
              <div className="me-2">
                <i
                  className=" mx-1 fa-solid fa-pen-to-square btn_edit"
                  onClick={() => editItem(item.id, item.input)}
                ></i>
                <i
                  className=" mx-1 fa-solid fa-trash btn_delete"
                  onClick={() => deleteItem(item.id)}
                ></i>
              </div>
            </div>
          ))}
        </div>
        {/* --------------------------------Todo list ends---------------------------------------------- */}
      </div>
      <Footer />
    </>
  );
};

export default Post;
