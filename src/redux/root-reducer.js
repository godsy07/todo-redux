import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import listReducer from "./reducer/list.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  items: listReducer,
});

export default persistReducer(persistConfig, rootReducer);
