import { ListActionTypes } from "./list.type";

export const INITIAL_STATE = {
  // items: [{ id: 1, name: "Attend Meeting", isDone: false }],
  items: [],
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ListActionTypes.DEL_LIST:
      return state.filter((el) => el.id !== action.payload.id);
    case ListActionTypes.ADD_LIST:
      return [...state, action.payload];
    case ListActionTypes.CHANGE_LIST:
      return state.map((el) =>
        el.id === action.payload.id ? { ...el, isDone: !el.isDone } : el
      );
    default:
      return state;
  }
};

export default listReducer;
