import React, { useState } from "react";
import SidebarToggleButton from "./SidebarToggleButton/SidebarToggleButton";
import Logo from "./Logo/Logo";
import Searchbar from "./Searchbar/Searchbar";
import SearchToggleButton from "./SearchToggleButton/SearchToggleButton";
import Profile from "./Profile/Profile";
import "./header.scss";

const Header: React.FC = () => {
    const [isSearchbarActive, setisSearchbarActive] = useState<boolean>(false);
    const toggleSearch = () => {
        setisSearchbarActive(!isSearchbarActive);
    };
    return (
        <header>
            <div>
                <SidebarToggleButton/>
                <Logo/>
                <Searchbar isSearchbarActive={isSearchbarActive}/>
            </div>
            <div>
                <SearchToggleButton toggleSearch={toggleSearch}/>
                <Profile/>
            </div>
        </header>
    );
};

export default Header;