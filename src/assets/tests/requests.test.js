import {fetchCompaniesURL} from "../constants";

const fetchMock = require('fetch-mock');
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
        const companies = fetchCompanies();
        companies.map(async company => {
            const {id} = company;
            const income = await fetchIncomes(id);
            company.income
        })


        const correctData = response.filter(company => {
            const {id, name, city} = company;
            return id && name && city;
        });

        expect(response).toEqual(correctData);
    });
});