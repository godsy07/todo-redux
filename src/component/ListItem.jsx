import React from "react";
import { connect } from "react-redux";
import { changeItems, delItems } from "../redux/reducer/list.action";

const ListItem = ({ item, changeItems, delItems }) => {
  return (
    <div className='list-item'>
      <div className='text-area' onDoubleClick={() => changeItems(item)}>
        <input
          type='checkbox'
          checked={item.isDone}
          onChange={() => changeItems(item)}
        />
        <label className={item.isDone ? "checked-list" : ""}>{item.name}</label>
      </div>

      <button className='del-button' onClick={() => delItems(item)}>
        &#10006;
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  delItems: (item) => dispatch(delItems(item)),
  changeItems: (item) => dispatch(changeItems(item)),
});

export default connect(null, mapDispatchToProps)(ListItem);
