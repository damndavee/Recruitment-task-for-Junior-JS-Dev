export const getTotalIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0)
};

export const getAverageIncome = (arr) => {
    return arr.reduce((acc, curr) => {
        const {value} = curr;
        return acc + Number(value);
    }, 0) / arr.length || 0;
};

export const getLastMonthIncome = (arr) => {
    const previousMonthBeginning = new Date();
    previousMonthBeginning.setMonth(previousMonthBeginning.getMonth() - 1);
    previousMonthBeginning.setDate(1);
    previousMonthBeginning.setHours(0, 0, 0, 0);

    const previousMonthEnd = new Date();
    previousMonthEnd.setDate(0)
    previousMonthEnd.setHours(24, 0, 0, 0);

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