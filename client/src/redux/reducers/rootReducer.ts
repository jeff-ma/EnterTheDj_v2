import { combineReducers } from "redux";
import searchbar from "./searchbar";
import sidebar from "./sidebar";

export const rootReducer = combineReducers({
    searchbar,
    sidebar
});

export type AppState = ReturnType<typeof rootReducer>;