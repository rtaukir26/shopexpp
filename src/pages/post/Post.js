import React, { useState } from "react";

const Post = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);

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
  return (
    <>
      <div className="mt-5 d-flex justify-content-around">
        <div className="form_div">
          <h5>Add your items</h5>
          <form onSubmit={handleSubmit} >
            <input
              type="text"
              className="item_input"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            {/* <input type="submit" value="Add" /> */}
            <button className="addBtn_item" type="submit">
              <i class="fa-solid fa-plus"></i>
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
      </div>
    </>
  );
};

export default Post;
