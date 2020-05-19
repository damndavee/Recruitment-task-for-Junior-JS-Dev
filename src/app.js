import React, {useEffect, useState} from 'react';
import {fetchCompanies, fetchIncomes} from "./assets/requests";
import './App.css';
import Table from "./components/table/table";
import SearchFilter from "./components/searchFilter/searchFilter";
import {getLastMonthIncome, getAverageIncome, getTotalIncome} from "./assets/incomesOperations";
import {sortTable} from "./assets/sorting";
import {searchTable} from "./assets/search";
import Pagination from "./components/pagination/pagination";

const prepareData = (arr, from, to) => {
    const result = arr.map(async (company, index) => {
        if (!(index >= from && index < to)) return company;

        const {id} = company;
        const {incomes} = await fetchIncomes(id);
        company.totalIncome = Number(getTotalIncome(incomes).toFixed(2));
        company.averageIncome = Number(getAverageIncome(incomes).toFixed(2));
        company.lastMonthIncome = Number(getLastMonthIncome(incomes).toFixed(2));
        return company;
    });

    return Promise.all(result).then(done => {
        return done;
    });
};

const App = () => {

    const [data, setData] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [elementsPerPage] = useState(30);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [secondEffectShouldRun, setSecondEffectShouldRun] = useState(false);

    useEffect(() => {
        (async function () {
            setIsLoading(true);
            try {
                const data = sortTable(await fetchCompanies(), "id", false);
                const prep = await prepareData(data, 0, elementsPerPage);
                setData(prep);
                setPreparedData(prep);
                setIsLoading(false);
                setSecondEffectShouldRun(true);
            } catch (e) {
                setError(e);
                setIsLoading(false);
            }
        })();
    }, [elementsPerPage]);

    useEffect(() => {
        if (secondEffectShouldRun) {
            (async function () {
                try {
                    const backgroundData = await prepareData(data, elementsPerPage, data.length);
                    setData(backgroundData);
                } catch (e) {
                    setError(e);
                }
            })();
            setSecondEffectShouldRun(false);
        }
    }, [secondEffectShouldRun, data, elementsPerPage]);

    const handleSorting = (sortBy, sort) => {
        const sortedTable = [...sortTable(preparedData, sortBy, sort)];
        setPreparedData(sortedTable);
        setCurrentPage(1);
    }

    const handleSearch = (searchTerm) => {
        const filteredTable = [...searchTable(data, searchTerm)];
        setPreparedData(filteredTable);
    }

    const handlePageChange = (value) => {
        if (currentPage + value > data.length / elementsPerPage ||
            currentPage + value < 1 ||
            currentPage + value > maxPage) {
            return;
        }
        setCurrentPage(currentPage + value);
    }

    const prep = preparedData.slice((currentPage - 1) * elementsPerPage, currentPage * elementsPerPage);
    const maxPage = Math.ceil(preparedData.length / elementsPerPage) || 1;
    return (
        <>
            {(isLoading) ? "Loading!" : null}
            {(!isLoading && error) ? "Something went wrong!" : null}
            {(!data && !isLoading) ? "No data." : null}
            {preparedData ? (<>
                <SearchFilter
                    handleSearch={handleSearch}
                />
                <Table
                    data={prep}
                    handleSorting={handleSorting}
                />
                <Pagination
                    handlePageChange={handlePageChange}
                    currentPage={currentPage}
                    maxPage={maxPage}
                />
            </>) : <p>No data found</p>}
        </>
    );
}

export default App;
