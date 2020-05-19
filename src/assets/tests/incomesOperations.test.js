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
                    value: 10,
                },
                {
                    id: 2,
                    value: 20,
                }
            ];

            expect(getAverageIncome(INPUT)).toEqual(15);
        });
    });


    describe("Test getLastMonthIncome function", () => {
        it('Returns 0 if array is empty', () => {
            expect(getLastMonthIncome([])).toEqual(0);
        });

        it('Returns last month income if array is not empty', () => {
            const lastMonth = new Date();
            lastMonth.setDate(lastMonth.getDate() - 15);

            const moreThanLastMonth = new Date();
            moreThanLastMonth.setMonth(moreThanLastMonth.getMonth() - 3);
            const INPUT = [
                {
                    id: 1,
                    value: 10,
                    date: lastMonth,
                },
                {
                    id: 2,
                    value: 20,
                    date: moreThanLastMonth,
                },
                {
                    id: 3,
                    value: 15,
                    date: lastMonth,
                }
            ];

            expect(getLastMonthIncome(INPUT)).toEqual(25);
        })
    });
})
