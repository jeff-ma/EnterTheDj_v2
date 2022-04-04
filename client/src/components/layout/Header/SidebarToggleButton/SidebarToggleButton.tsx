import React from "react";
import { connect } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux/store";
import { toggleSidebar } from "../../../../redux/actions/sidebar";
import "./sidebarToggleButton.scss";

interface Props {
    isSidebarActive?: boolean,
    toggleSidebar?: () => void
}

const SidebarToggleButton: React.FC<Props> = ({isSidebarActive, toggleSidebar}) => {
    return (
        <button id="sidebar-button" onClick={toggleSidebar}>
            <span className={`top bar ${isSidebarActive ? "active": ""}`}></span>
            <span className={`middle bar ${isSidebarActive ? "active": ""}`}></span>
            <span className={`bottom bar ${isSidebarActive ? "active": ""}`}></span>
        </button>
    );
};

const mapStateToProps = (state: RootState) => state.sidebar;

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    toggleSidebar: () => dispatch(toggleSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidebarToggleButton);