import { createWrapper } from "next-redux-wrapper";
import { createStore} from 'redux';

import reducer from '../reducers'

const configuerStore = () => {
    const store = createStore(reducer);
    return store;
};
const wrapper = createWrapper(configuerStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper