/**
 * Get total income of incomes in array
 * @function getTotalIncome
 * @param {Array}  arr - array of objects with values(incomes)
 * @return {Number} return sum of incomes in input array
 */
export const getTotalIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0)
};

/**
 * Get average income of incomes in array
 * @function getAverageIncome
 * @param {Array}  arr - array of objects with values(incomes)
 * @return {Number} return average of incomes in input array or 0 if input array length is 0
 */
export const getAverageIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0) / arr.length || 0;
};

/**
 * Get last month income of incomes in array
 * @function getLastMonthIncome
 * @param {Array}  arr - array of objects with values(incomes) and dates
 * @return {Number} return last month income
 */
export const getLastMonthIncome = (arr) => {
    const previousMonthBeginning = new Date();
    previousMonthBeginning.setMonth(previousMonthBeginning.getMonth() - 1);
    previousMonthBeginning.setDate(1);
    previousMonthBeginning.setHours(0, 0, 0, 0);

    const previousMonthEnd = new Date();
    previousMonthEnd.setDate(1)
    previousMonthEnd.setHours(0, 0, 0, 0);

    return arr.reduce((acc, curr) => {
        const {date, value} = curr;
        const parsedDate = new Date(date);
        if (previousMonthBeginning <= parsedDate &&
            previousMonthEnd >= parsedDate) {
            return acc + Number(value);
        }
        return acc;
    }, 0);
};