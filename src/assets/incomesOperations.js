export const getTotalIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + Number(curr.value);
    }, 0)
}

export const getAverageIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        return acc + Number(curr.value);
    }, 0) / arr.length;
}

export const getLastMonthIncome = (arr) => {
    const lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);
    return arr.reduce((acc, curr) => {
        if (lastMonth <= new Date(curr.date)) {
            return acc + Number(curr.value);
        }
        return acc;
    }, 0);
}