/**
 * Sort input array
 * @function sortTable
 * @param {Array}  arr - array of object to sort
 * @param {String} sortBy - word describing by what to sort
 * @param {Boolean} ascending - describing if output should be in ascending order, false meaning descending order
 * @return {Array} arr - sorted array of objects
 */
export const sortTable = (arr, sortBy, ascending = true) => {
    return arr.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) return ascending ? 1 : -1;
        if (a[sortBy] < b[sortBy]) return ascending ? -1 : 1;
        return 0;
    });
};