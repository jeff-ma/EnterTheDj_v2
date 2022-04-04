import React, { useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchbar.scss";

interface Props {
    isSearchbarActive?: boolean
}

const Searchbar: React.FC<Props> = ({isSearchbarActive}) => {
    const searchInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        searchInputRef.current?.focus();
    }, [isSearchbarActive]);
    
    return (
        <form id="search-bar" className={isSearchbarActive ? "active" : ""}>
            <button>
                <FaSearch/>
            </button>
            <input type="search" name="search" placeholder="Search" ref={searchInputRef}/>
        </form>
    );
}

export default Searchbar;