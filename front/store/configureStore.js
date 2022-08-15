import { createWrapper } from "next-redux-wrapper";
import { applyMiddleware, createStore, compose } from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from "../reducers";

const configuerStore = () => {
  const middlewares = []
  const enhancer = process.env.NODE_ENV === "prodcution"
  ? compose (applyMiddleware(...middlewares))
  : composeWithDevTools (applyMiddleware(...middlewares))
  const store = createStore(reducer, enhancer);
  return store;
};
const wrapper = createWrapper(configuerStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
