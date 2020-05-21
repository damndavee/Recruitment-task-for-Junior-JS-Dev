import React, {useState} from "react";
import {tableValues} from "../../assets/constants";
import './TableHead.scss';

const TableHead = ({handleSorting, objectKey, defaultSort = false}) => {

    const [sort, setSort] = useState(defaultSort);

    const handleSortChange = () => {
        const updatedSort = !sort;
        setSort(updatedSort);
        handleSorting(objectKey, updatedSort);
    }

    return (
        <th>
            <button
                className="btn btn__table--head"
                onClick={handleSortChange}>
                {tableValues[objectKey]}</button>
        </th>
    );
}

export default TableHead;