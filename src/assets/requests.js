import {fetchCompaniesURL, fetchIncomesURL} from "./constants";

/**
 * Fetch companies from API
 * @function fetchCompanies
 * @return {Promise} return fetched data
 */
export const fetchCompanies = () => {
    return fetch(fetchCompaniesURL)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}

/**
 * Fetch income of companies from API
 * @function fetchIncomes
 * @Param {Number} id - fetch incomes of companies by given id
 * @return {Promise} return fetched incomes
 */
export const fetchIncomes = (id) => {
    return fetch(`${fetchIncomesURL}${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}
