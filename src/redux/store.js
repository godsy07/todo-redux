// import { applyMiddleware, createStore, compose } from "redux";
import { createStore } from "redux";
import { persistStore } from "redux-persist";
// import logger from "redux-logger";
import rootReducer from "./root-reducer";

import { INITIAL_STATE } from "./reducer/list.reducer";

// const middlewares = [logger];

// const composeEnhancers =
//   typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//         // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//       })
//     : compose;

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares)
//   // other store enhancers if any
// );

// export const store = createStore(rootReducer, INITIAL_STATE, enhancer);
export const store = createStore(rootReducer, INITIAL_STATE);

export const persistor = persistStore(store);

// export default { store, persistor };
