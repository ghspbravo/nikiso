import { createStore } from 'redux'
import rootReducer from './reducers';


import render from "./render";

const store = createStore(rootReducer);

store.subscribe(render);

export default store;