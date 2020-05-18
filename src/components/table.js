import React, {useState, useEffect} from 'react';
import './table.css';
import {fetchCompanies, fetchIncomes} from "../requests";

const tableHead = ['id', 'name', 'city', 'total income', 'average income', 'last month income'];


const Table = (props) => {

    const {data, handleChange} = props;

    const generateTableHead = () => {
        return tableHead.map((head, index) => {
            return (<th key={index}>{head.charAt(0).toUpperCase() + head.slice(1)}</th>)
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
        <>
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
        </>
    )
        ;
}

export default Table;
