import {fetchIncomes} from "./requests";
import {getAverageIncome, getLastMonthIncome, getTotalIncome} from "./incomesOperations";

export const prepareData = (arr, from, to) => {
    const result = arr.map(async (company, index) => {
        if (!(index >= from && index < to)) return company;

        const {id} = company;
        try {
            const {incomes} = await fetchIncomes(id);
            company.totalIncome = Number(getTotalIncome(incomes).toFixed(2));
            company.averageIncome = Number(getAverageIncome(incomes).toFixed(2));
            company.lastMonthIncome = Number(getLastMonthIncome(incomes).toFixed(2));
        } catch (e) {
            throw new Error("Something went wrong!");
        }

        return company;
    });

    return Promise.all(result).then(done => {
        return done;
    });
};