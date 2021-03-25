import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import reducers from "reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const Root = ({ initailState = {}, children }) => {
  const store = createStore(
    reducers,
    initailState,
    composeWithDevTools(applyMiddleware(reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};

export default Root;
