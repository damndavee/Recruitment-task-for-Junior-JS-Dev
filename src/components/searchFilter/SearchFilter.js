import React, {useState} from 'react';

function SearchFilter({handleSearch}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);
        handleSearch(event.target.value);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </div>
    );
}

export default SearchFilter;