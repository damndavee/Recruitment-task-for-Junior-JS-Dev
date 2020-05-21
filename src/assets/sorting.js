export const sortTable = (arr, sortBy, ascending = true) => {
    return arr.sort((a, b) => {
        if (ascending) {
            if (a[sortBy] > b[sortBy]) return 1;
            if (a[sortBy] < b[sortBy]) return -1;
        } else {
            if (a[sortBy] > b[sortBy]) return -1;
            if (a[sortBy] < b[sortBy]) return 1;
        }
        return 0;
    });
};