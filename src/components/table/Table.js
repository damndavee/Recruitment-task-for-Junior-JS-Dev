import React from "react";
import TableHead from "../tableHead/TableHead";
import {tableValues} from "../../assets/constants";
import "./Table.scss";

const Table = ({data, handleSorting}) => {

    const generateTableHead = () => {
        const keys = Object.keys(tableValues);
        return keys.map((key, index) => {
            return <TableHead
                handleSorting={handleSorting}
                objectKey={key}
                key={key}
                // id is being sorted after first fetch, this component has to have different value
                defaultSort={key === "id"}
            />
        })
    }

    const generateTableContent = () => {
        return data.map((company, index) => {
            const {id, name, city, totalIncome, averageIncome, lastMonthIncome} = company;

            const {
                id: IDValue,
                name: nameValue,
                city: cityValue,
                totalIncome: totalIncomeValue,
                averageIncome: averageIncomeValue,
                lastMonthIncome: lastMonthIncomeValue
            } = tableValues;

            return (<tr key={index}>
                <td data-label={IDValue}>{id}</td>
                <td data-label={nameValue}>{name}</td>
                <td data-label={cityValue}>{city}</td>
                <td data-label={totalIncomeValue}>{totalIncome}</td>
                <td data-label={averageIncomeValue}>{averageIncome}</td>
                <td data-label={lastMonthIncomeValue}>{lastMonthIncome}</td>
            </tr>)
        })
    }

    return (
        <div className="mainTable-container">
            <table className="mainTable">
                <thead>
                <tr>
                    {generateTableHead()}
                </tr>
                </thead>
                <tbody>
                {generateTableContent()}
                </tbody>
            </table>
        </div>
    );
}

export default Table;