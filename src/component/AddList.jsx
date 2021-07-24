import React from "react";

const AddList = ({ showAdd, showForm }) => {
  return (
    <button
      className={`custom-button ${showForm ? "close" : "add"}`}
      onClick={showAdd}
    >
      {showForm ? "Close" : "Add"}
    </button>
  );
};

export default AddList;
