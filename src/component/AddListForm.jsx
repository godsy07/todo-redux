import React from "react";
import { useState } from "react";

import { connect } from "react-redux";

import { addItems } from "../redux/reducer/list.action";

const AddListForm = ({ addItems }) => {
  const [todoName, setTodoName] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (todoName.length === 0) {
      alert("Please enter a task");
      return;
    } else {
      const id = Math.floor(Math.random() * 10000) + 1;
      const status = false;
      const newItem = { id: id, name: todoName, isDone: status };
      addItems(newItem);
    }
    setTodoName("");
  };

  return (
    <form className='add-list-form' onSubmit={onSubmit}>
      <input
        type='text'
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button type='submit'>Submit</button>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItems: (list) => dispatch(addItems(list)),
});

export default connect(null, mapDispatchToProps)(AddListForm);
