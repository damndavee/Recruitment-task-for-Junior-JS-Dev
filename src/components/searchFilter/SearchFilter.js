import React, {useState} from 'react';
import "./SearchFilter.scss";

function SearchFilter({handleSearch}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);
        handleSearch(event.target.value);
    };

    return (
        <div className="input-container">
            <input
                className="input-search"
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchFilter;