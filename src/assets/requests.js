export function fetchCompanies() {
    return fetch("https://recruitment.hal.skygate.io/companies")
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}

export function fetchIncomes(id = 0) {
    return fetch(`https://recruitment.hal.skygate.io/incomes/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => data)
        .catch(error => error);
}
