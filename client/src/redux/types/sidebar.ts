export enum ActionType {
    CLOSE_SIDEBAR = "CLOSE_SIDEBAR",
    TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR"
}

interface CloseSidebar {
    type: ActionType.CLOSE_SIDEBAR
}

interface ToggleSidebar {
    type: ActionType.TOGGLE_SIDEBAR
}

export type Action = CloseSidebar | ToggleSidebar;

export interface Sidebar {
    isSidebarActive: boolean
};

// export const InitialState: Sidebar = {
//     isSidebarActive: false
// };