import {fetchCompaniesURL, fetchIncomesURL} from "./constants";

export function fetchCompanies() {
    return fetch(fetchCompaniesURL)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}

export function fetchIncomes(id = 0) {
    return fetch(`${fetchIncomesURL}${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}
