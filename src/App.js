import React from "react";
import { useState } from "react";

import AddList from "./component/AddList";
import TodoList from "./component/TodoList";
import AddListForm from "./component/AddListForm";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const showAdd = () => {
    setShowForm(!showForm);
  };

  return (
    <div className='app'>
      <header className='header'>
        <h1>ToDo List</h1>
        <AddList showAdd={showAdd} showForm={showForm} />
      </header>
      {showForm && <AddListForm />}
      <div className='container'>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
