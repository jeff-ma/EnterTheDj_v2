import React from "react";
import { FaSearch } from "react-icons/fa";
import "./searchToggleButton.scss";

interface Props {
    toggleSearch?: () => void
}

const SearchToggleButton: React.FC<Props> = ({toggleSearch}) => {
    return (
        <button id="search-button" onClick={toggleSearch}>
            <FaSearch/>
        </button>
    );
}

export default SearchToggleButton;