import {fetchIncomes, fetchCompanies} from "../requests";

describe('Test companies fetching', () => {
    it('Fetched data has needed information', async () => {
        const response = await fetchCompanies();

        const correctData = response.filter(company => {
            const {id, name, city} = company;
            return id && name && city;
        });

        expect(response).toEqual(correctData);
    });
});

describe('Test companies income fetching', () => {
    it('Fetched data has needed information', async () => {
        const companies = await fetchCompanies();
        const randomIndex = Math.round(Math.random() * (companies.length));
        const randomIDFromCompanies = companies[randomIndex].id;
        const incomes = await fetchIncomes(randomIDFromCompanies);
        const responseHasRequiredValues =
            incomes.hasOwnProperty("id") &&
            incomes.hasOwnProperty("incomes");

        expect(responseHasRequiredValues).toEqual(true);
    });
});