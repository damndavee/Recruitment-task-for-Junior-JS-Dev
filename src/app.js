import React, {useState, useEffect} from 'react';
import {fetchCompanies, fetchIncomes} from "./requests";
import './App.css';
import Table from "./components/table";

function getTotalIncome(arr) {
    return arr.reduce((acc, curr) => {
        return acc + Number(curr.value);
    }, 0)
}

function getAverageIncome(arr) {
    return 1;

}

function getLastMonthIncome(arr) {
    return 1;
}

const sortById = (arr) => {
    return arr.sort((a, b) => {
        if (a.id > b.id) return 1;
        if (a.id < b.id) return -1;
    });
}

const prepareData = (arr) => {
    const result = arr.map(async (company) => {
        const {id} = company;
        const data = await fetchIncomes(id);
        company.totalIncome = getTotalIncome(data.incomes).toFixed(2);
        company.averageIncome = getAverageIncome(data.incomes).toFixed(2);
        company.lastMonthIncome = getLastMonthIncome(data.incomes).toFixed(2);
        return company;
    })

    return Promise.all(result).then(done => {
        return done;
    })
}

const App = () => {

    const [data, setData] = useState([]);
    const [preparedData, setPreparedData] = useState([]);
    const [pageNumber, setPageNumber] = useState({pageNumber: 1});

    useEffect(() => {
        (async function () {
            const data = await fetchCompanies();
            setData(sortById(data));
            const prep = await prepareData(data.slice(0, 20));
            setPreparedData(prep);
        })();
    }, [])

    function handleChange() {
        setData(data);
    }


    const handlePageChange = () => {

    }

    return (
        <>
            <Table
                data={preparedData}
                handleChange={handleChange}
            />
            <button onClick={handlePageChange}>PREVIOUS</button>
            <button onClick={handlePageChange}>NEXT</button>
        </>
    );
}

export default App;
