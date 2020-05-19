import React, {useState} from "react";
import {tableHead} from "../../assets/constants";
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
            {tableHead[objectKey].charAt(0).toUpperCase() + tableHead[objectKey].slice(1)}
        </th>
    );
}

export default TableHead;
