import { ListActionTypes } from "./list.type";

export const delItems = (id) => ({
  type: ListActionTypes.DEL_LIST,
  payload: id,
});

export const addItems = (items) => ({
  type: ListActionTypes.ADD_LIST,
  payload: items,
});

export const changeItems = (items) => ({
  type: ListActionTypes.CHANGE_LIST,
  payload: items,
});
