export const searchTable = (arr, searchTerm) => {
    searchTerm = searchTerm.toLowerCase();
    return arr.filter(company => {
            const {id, name, city, totalIncome = 0, averageIncome = 0, lastMonthIncome = 0} = company;

            return (id.toString().includes(searchTerm) ||
                name.toLowerCase().includes(searchTerm) ||
                city.toLowerCase().includes(searchTerm) ||
                totalIncome.toString().includes(searchTerm) ||
                averageIncome.toString().includes(searchTerm) ||
                lastMonthIncome.toString().includes(searchTerm));
        }
    );
}