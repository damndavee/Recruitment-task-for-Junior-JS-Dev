import React, {useState} from 'react';
import "./MobileSorting.scss";
import {tableValues} from "../../assets/constants";

function MobileSorting({handleSorting}) {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = event => {
        setSearchTerm(event.target.value);
        handleSorting(event.target.value);
    };

    const renderOptions = () => {
        const keys = Object.keys(tableValues);
        return keys.map(key => {
            const formattedOption = tableValues[key].charAt(0).toUpperCase() + tableValues[key].slice(1)
            return (<React.Fragment key={key}>
                <option
                    value={key}>{formattedOption} (Ascending)
                </option>
                <option
                    value={key}>{formattedOption} (Descending)
                </option>
            </React.Fragment>)


        })
    }

    return (
        <div className="mobile-sort">
            <select onChange={handleChange}>
                {renderOptions()}
            </select>
        </div>
    );
}

export default MobileSorting;