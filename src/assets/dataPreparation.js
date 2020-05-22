import {fetchIncomes} from "./requests";
import {getAverageIncome, getLastMonthIncome, getTotalIncome} from "./incomesOperations";

/**
 * Prepare data that needs to be displayed on website
 * @function prepareData
 * @param {Array}  arr - array of objects
 * @param {Number} from - from what index data should be filed
 * @param {Number} to - to what index data should be filled
 * @return {Promise} return - prepared data
 */
export const prepareData = (arr, from, to) => {
    const result = arr.map(async (company, index) => {
        if (!(index >= from && index < to)) return company;

        const {id} = company;
        try {
            const {incomes} = await fetchIncomes(id);
            if (!incomes) {
                company.totalIncome = "No data!";
                company.averageIncome = "No data!";
                company.lastMonthIncome = "No data!";
            } else {
                company.totalIncome = (Number(getTotalIncome(incomes).toFixed(2)));
                company.averageIncome = Number(getAverageIncome(incomes).toFixed(2));
                company.lastMonthIncome = Number(getLastMonthIncome(incomes).toFixed(2));
            }
        } catch (e) {
            throw new Error("Something went wrong!");
        }
        return company;
    });

    return Promise.all(result).then(done => {
        return done;
    });
};