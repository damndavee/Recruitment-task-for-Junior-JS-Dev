export const getTotalIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0)
}

export const getAverageIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0) / arr.length || 0;
}

export const getLastMonthIncome = (arr) => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return arr.reduce((acc, curr) => {
        const {date, value} = curr;
        if (lastMonth <= new Date(date)) {
            return acc + Number(value);
        }
        return acc;
    }, 0);
}