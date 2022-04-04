import { Action, ActionType } from "../types/searchbar";

export const toggleSearchbar = (): Action => ({
    type: ActionType.TOGGLE_SEARCHBAR
});