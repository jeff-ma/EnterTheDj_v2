import { Action, ActionType, Sidebar} from "../types/sidebar";

const initialState: Sidebar = {
    isSidebarActive: false
};

const reducer = (state = initialState, action: Action): Sidebar => {
    switch(action.type) {
        case ActionType.CLOSE_SIDEBAR:
            return {isSidebarActive: false};
        case ActionType.TOGGLE_SIDEBAR:
            return {isSidebarActive: !state.isSidebarActive};
        default:
            return state;
    }
};

export default reducer;