import {sortTable} from "../sorting";

describe("Test sorting function", () => {
    it('Returns empty array if the is no input', () => {
        expect(sortTable([], 'id')).toEqual([]);
    })


})