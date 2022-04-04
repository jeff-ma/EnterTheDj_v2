export enum ActionType {
    TOGGLE_SEARCHBAR = "TOGGLE_SEARCHBAR"
}

interface ToggleSearchbar {
    type: ActionType.TOGGLE_SEARCHBAR
}

export type Action = ToggleSearchbar;

export interface Searchbar {
    isSearchbarActive: boolean
}

// export const InitialState: Searchbar = {
//     isSearchbarActive: false
// }