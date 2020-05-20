import {getAverageIncome, getLastMonthIncome, getTotalIncome} from "../incomesOperations";

describe("Test incomesOperations", () => {
    describe("Test getTotalIncome function", () => {
        it('Returns 0 if array is empty', () => {
            expect(getTotalIncome([])).toEqual(0);
        })

        it('Returns correct sum if array is not empty', () => {
            const INPUT = [
                {
                    id: 1,
                    value: 10,
                },
                {
                    id: 2,
                    value: 20,
                }
            ];
            expect(getTotalIncome(INPUT)).toEqual(30);
        })
    });

    describe("Test getAverageIncome function", () => {
        it('Returns 0 if array is empty', () => {
            expect(getAverageIncome([])).toEqual(0);
        });

        it('Returns correct average value if array is not empty', () => {
            const INPUT = [
                {
                    id: 1,
                    value: 15,
                },
                {
                    id: 2,
                    value: 25,
                },
                {
                    id: 3,
                    value: 50,
                }
            ];

            expect(getAverageIncome(INPUT)).toEqual(30);
        });
    });


    describe("Test getLastMonthIncome function", () => {
        it('Returns 0 if array is empty', () => {
            expect(getLastMonthIncome([])).toEqual(0);
        });

        it('Returns last month income if array is not empty', () => {
            const previousMonth = new Date();
            previousMonth.setMonth(previousMonth.getMonth() - 1);
            previousMonth.setDate(15);
            previousMonth.setHours(0, 0, 0, 0);

            const beforePreviousMonth = new Date();
            beforePreviousMonth.setMonth(beforePreviousMonth.getMonth() - 2);

            const INPUT = [
                {
                    id: 1,
                    value: 10,
                    date: previousMonth,
                },
                {
                    id: 2,
                    value: 20,
                    date: previousMonth,
                },
                {
                    id: 3,
                    value: 15,
                    date: beforePreviousMonth,
                },
                {
                    id: 4,
                    value: 35,
                    date: beforePreviousMonth,
                }
            ];

            expect(getLastMonthIncome(INPUT)).toEqual(30);
        });

        it('Returns last month income if array has edge cases', () => {
            const previousMonth = new Date();
            previousMonth.setMonth(previousMonth.getMonth() - 1);
            previousMonth.setDate(15);
            previousMonth.setHours(0, 0, 0, 0);

            const previousMonthBeginning = new Date();
            previousMonthBeginning.setMonth(previousMonthBeginning.getMonth() - 1);
            previousMonthBeginning.setDate(1);
            previousMonthBeginning.setHours(0, 0, 0, 0);

            const previousMonthEnd = new Date();
            previousMonthEnd.setDate(0)
            previousMonthEnd.setHours(23, 59, 59, 999);

            const beforePreviousMonth = new Date();
            beforePreviousMonth.setMonth(beforePreviousMonth.getMonth() - 2);

            const INPUT = [
                {
                    id: 1,
                    value: 10,
                    date: previousMonthEnd,
                },
                {
                    id: 2,
                    value: 50,
                    date: previousMonthBeginning,
                },
                {
                    id: 3,
                    value: 120,
                    date: previousMonth,
                },
                {
                    id: 4,
                    value: 190,
                    date: beforePreviousMonth,
                },
                {
                    id: 5,
                    value: 260,
                    date: beforePreviousMonth,
                }
            ];

            expect(getLastMonthIncome(INPUT)).toEqual(180);
        })
    });
})
