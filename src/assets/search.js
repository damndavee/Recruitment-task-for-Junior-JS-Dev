export const searchTable = (arr, searchTerm) => {
    return arr.filter(company => {
            const {id = "", name = "", city = "", totalIncome = "", averageIncome = "", lastMonthIncome = ""} = company;

            return (id.toString().includes(searchTerm) ||
                name.toLowerCase().includes(searchTerm) ||
                city.toLowerCase().includes(searchTerm) ||
                totalIncome.toString().includes(searchTerm) ||
                averageIncome.toString().includes(searchTerm) ||
                lastMonthIncome.toString().includes(searchTerm));
        }
    );
}