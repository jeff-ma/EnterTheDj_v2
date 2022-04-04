import { applyMiddleware, createStore } from "redux";
import {createLogger} from "redux-logger";
import {rootReducer} from "./reducers/rootReducer";

const logger = createLogger({collapsed: true});
const middleWares = [
    logger
];

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = createStore(rootReducer, applyMiddleware(...middleWares));