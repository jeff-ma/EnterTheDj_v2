import React from "react";
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import { Cookies } from "react-cookie";
import {FaHistory, FaRegEye, FaRegChartBar, FaHome, FaMusic, FaTasks, FaDesktop, FaRecordVinyl, FaSignInAlt, FaSignOutAlt} from "react-icons/fa";
import { closeSidebar } from "../../../redux/actions/sidebar";
import {AppDispatch, RootState} from "../../../redux/store";
import "./sidebar.scss";

interface Props {
    isSidebarActive?: boolean,
    closeSidebar?: () => void;
}

const Sidebar: React.FC<Props> = ({isSidebarActive, closeSidebar}) => {
    const cookies: Cookies = new Cookies();
    const accessToken: string | undefined = cookies.get("access_token");

    return (
        <nav id="sidebar" className={isSidebarActive ? "active" : ""}>
            <ul className="sidebar-nav-list">
                    <li className="sidebar-nav-item">
                <NavLink to="/" className="sidebar-nav-link" onClick={closeSidebar}>
                        <FaHome className="sidebar-nav-icon"/>
                        <span className="sidebar-nav-label">Home</span>
                </NavLink>
                    </li>
                    <li className="sidebar-nav-item">
                <NavLink to="/browse" className="sidebar-nav-link">
                        <FaRegEye className="sidebar-nav-icon"/>
                        <span className="sidebar-nav-label">Browse</span>
                </NavLink>
                    </li>
                    <li className="sidebar-nav-item">
                <NavLink to="/playlists" className="sidebar-nav-link">
                        <FaMusic className="sidebar-nav-icon"/>
                        <span className="sidebar-nav-label">Playlists</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                <NavLink to="/charts" className="sidebar-nav-link">
                    <FaRegChartBar className="sidebar-nav-icon"/>
                    <span className="sidebar-nav-label">Charts</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                <NavLink to="/discover" className="sidebar-nav-link">
                    <FaRecordVinyl className="sidebar-nav-icon"/>
                    <span className="sidebar-nav-label">Discover</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                <NavLink to="/recent" className="sidebar-nav-link">
                    <FaHistory className="sidebar-nav-icon"/>
                    <span className="sidebar-nav-label">Recent</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                <NavLink to="/top" className="sidebar-nav-link">
                    <FaTasks className="sidebar-nav-icon"/>
                    <span className="sidebar-nav-label">Top</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                <NavLink to="/library" className="sidebar-nav-link">
                    <FaDesktop className="sidebar-nav-icon"/>
                    <span className="sidebar-nav-label">Library</span>
                </NavLink>
                    </li>
                <li className="sidebar-nav-item">
                    {accessToken ? 
                        <NavLink to="/logout" className="sidebar-nav-link">
                            <FaSignOutAlt className="sidebar-nav-icon"/>
                            <span className="sidebar-nav-label">Logout</span>
                        </NavLink>
                        :
                        <NavLink to="/login" className="sidebar-nav-link">
                            <FaSignInAlt className="sidebar-nav-icon"/>
                            <span className="sidebar-nav-label">Login</span>
                        </NavLink>
                    }
                </li>
            </ul>
        </nav>
    )
};

interface LinkDispatchProps {
    closeSidebar: () => void;
}

const mapStateToProps = (state: RootState) => state.sidebar;

const mapDispatchToProps = (dispatch: AppDispatch): LinkDispatchProps => ({
    closeSidebar: () => dispatch(closeSidebar())
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);