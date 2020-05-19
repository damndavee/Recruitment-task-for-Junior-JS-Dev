export const sortTable = (arr, sortBy, sort = true) => {
    return arr.sort((a, b) => {
        if (!sort) {
            if (a[sortBy] > b[sortBy]) return 1;
            if (a[sortBy] < b[sortBy]) return -1;
        } else {
            if (a[sortBy] > b[sortBy]) return -1;
            if (a[sortBy] < b[sortBy]) return 1;
        }
        return 0;
    });
}