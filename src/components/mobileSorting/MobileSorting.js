import React, {useState} from 'react';
import {tableValues} from "../../assets/constants";
import "./MobileSorting.scss";

function MobileSorting({handleSorting}) {

    const [optionValue, setOptionValue] = useState("id 1");

    const handleChange = event => {
        setOptionValue(event.target.value);
        const value = event.target.value.split(" ")[0];
        const sort = !!Number(event.target.value.split(" ")[1]);
        handleSorting(value, sort);
    };

    const renderOptions = () => {
        const keys = Object.keys(tableValues);
        return keys.map(key => {
            return (<React.Fragment key={key}>
                <option
                    value={`${key} 1`}
                >{tableValues[key]} (Ascending)
                </option>
                <option
                    value={`${key} 0`}>{tableValues[key]} (Descending)
                </option>
            </React.Fragment>)
        })
    }

    return (
        <div className="mobile-sort">
            <label htmlFor="sorting">Sort by: </label>
            <select name="sorting"
                    onChange={handleChange}
                    value={optionValue}>
                {renderOptions()}
            </select>
        </div>
    );
}

export default MobileSorting;