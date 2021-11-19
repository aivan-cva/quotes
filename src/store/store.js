import { createStore, applyMiddleware } from "redux";
import { quotesReducer } from "./quotes";
import thunk from "redux-thunk";

export const store = createStore(quotesReducer, applyMiddleware(thunk));
