import { Action, ActionType } from "../types/sidebar";

export const closeSidebar = (): Action => ({
    type: ActionType.CLOSE_SIDEBAR
});

export const toggleSidebar = (): Action => ({
    type: ActionType.TOGGLE_SIDEBAR
});