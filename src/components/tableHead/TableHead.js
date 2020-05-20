import React, {useState} from "react";
import {tableValues} from "../../assets/constants";
import './tableHead.css';

const TableHead = ({handleSorting, objectKey, defaultSort = true}) => {

    // true means ascending, false descending
    const [sort, setSort] = useState(defaultSort);

    const handleSortChange = () => {
        const updatedSort = !sort;
        setSort(updatedSort);
        handleSorting(objectKey, updatedSort);
    }

    return (
        <th
            onClick={handleSortChange}>
            {tableValues[objectKey].charAt(0).toUpperCase() + tableValues[objectKey].slice(1)}
        </th>
    );
}

export default TableHead;
