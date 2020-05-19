import React from "react";
import TableHead from "../tableHead/TableHead";
import {tableHead} from "../../assets/constants";
import './table.css';

const Table = ({data, handleSorting}) => {

    const generateTableHead = () => {
        const keys = Object.keys(tableHead);
        return keys.map((key, index) => {
            return <TableHead
                handleSorting={handleSorting}
                objectKey={key}
                key={key}
                // id is being sorted after first fetch, this component has to have different value
                defaultSort={key !== "id"}
            />
        })
    }

    const generateTableContent = () => {
        return data.map((company, index) => {
            return (<tr key={index}>
                <th>{company.id}</th>
                <th>{company.name}</th>
                <th>{company.city}</th>
                <th>{company.totalIncome}</th>
                <th>{company.averageIncome}</th>
                <th>{company.lastMonthIncome}</th>
            </tr>)
        })
    }

    return (
        <table>
            <thead>
            <tr>
                {generateTableHead()}
            </tr>
            </thead>
            <tbody>
            {generateTableContent()}
            </tbody>
        </table>
    );
}

export default Table;
