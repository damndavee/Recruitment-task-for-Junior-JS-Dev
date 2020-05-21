import {sortTable} from "../sorting";

describe("Test sorting function", () => {
    it('Returns empty array if the is no input', () => {
        expect(sortTable([], 'id')).toEqual([]);
    })

    it('Returns correct input when sorting by id,' +
        ' without specifying ascending or descending order', () => {
        const INPUT = [
            {
                id: 3,
                value: "abc"
            },
            {
                id: 1,
                value: "bca"
            },
            {
                id: 2,
                value: "cba"
            }
        ];

        const OUTPUT = [
            {
                id: 1,
                value: "bca"
            },
            {
                id: 2,
                value: "cba"
            },
            {
                id: 3,
                value: "abc"
            }
        ];

        expect(sortTable(INPUT, "id")).toEqual(OUTPUT);
    })

    it('Returns correct input when sorting by id,' +
        ' with specifying ascending order', () => {
        const INPUT = [
            {
                id: 3,
                value: "abc"
            },
            {
                id: 1,
                value: "bca"
            },
            {
                id: 2,
                value: "cba"
            }
        ];

        const OUTPUT = [
            {
                id: 1,
                value: "bca"
            },
            {
                id: 2,
                value: "cba"
            },
            {
                id: 3,
                value: "abc"
            }
        ];

        expect(sortTable(INPUT, "id", true)).toEqual(OUTPUT);
    });

    it('Returns correct input when sorting by id,' +
        ' with specifying descending order', () => {
        const INPUT = [
            {
                id: 3,
                value: "abc"
            },
            {
                id: 1,
                value: "bca"
            },
            {
                id: 2,
                value: "cba"
            }
        ];

        const OUTPUT = [
            {
                id: 3,
                value: "abc"
            },
            {
                id: 2,
                value: "cba"
            },
            {
                id: 1,
                value: "bca"
            }
        ];

        expect(sortTable(INPUT, "id", false)).toEqual(OUTPUT);
    });

})