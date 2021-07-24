import React from "react";
import { connect } from "react-redux";

import ListItem from "./ListItem";

const TodoList = ({ items }) => {
  return (
    <div className='list-area'>
      {items.length > 0 ? (
        items.map((item, index) => <ListItem key={index} item={item} />)
      ) : (
        <p className='no-data'>No Data to show</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});

export default connect(mapStateToProps, null)(TodoList);
