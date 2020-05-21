import {searchTable} from "../search";

describe('Test search function', () => {
    it('Returns empty array if the is no input', () => {
        expect(searchTable([], 'id')).toEqual([]);
    })

    it('Return correctly filtered array', () => {
        const INPUT = [
            {
                id: 1,
                name: "Flower.",
                city: "North Shirleyfurt"
            },
            {
                id: 2,
                name: "There is random FLOWER in the sencence.",
                city: "North Shirleyfurt"
            },
            {
                id: 3,
                name: "There is no green vegetable.",
                city: "North Shirleyfurt"
            },
            {
                id: 4,
                name: "One Two Three Four",
                city: "North Shirleyfurt"
            },
            {
                id: 5,
                name: "F L O W E R",
                city: "North Shirleyfurt"
            }
        ];

        const OUTPUT = [
            {
                id: 1,
                name: "Flower.",
                city: "North Shirleyfurt"
            },
            {
                id: 2,
                name: "There is random FLOWER in the sencence.",
                city: "North Shirleyfurt"
            },
        ];

        expect(searchTable(INPUT, "flower")).toEqual(OUTPUT);
    });
});
