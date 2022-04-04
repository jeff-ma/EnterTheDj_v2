import { Action, ActionType, Searchbar } from "../types/searchbar";

const initialState: Searchbar = {
    isSearchbarActive: false
}

const reducer = (state = initialState, action: Action): Searchbar => {
    switch (action.type) {
        case ActionType.TOGGLE_SEARCHBAR:
            return {isSearchbarActive: !state.isSearchbarActive};
        default:
            return state;
    }
};

export default reducer;