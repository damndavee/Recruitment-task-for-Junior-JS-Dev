# Top-secret application

Top-secret is a web application created  to display tabular data about companies.
Which displays:
- ID
- Name
- City
- Total income
- Average income
- Last month income

##Requirements

1. Fetch and display data in columns described above
2. Create your own implementation of table, Bootstrap, Material etc. are forbidden
3. Data should be sortable by ascending or descending order
4. Data should be filtered by all fields - Search box
5. Table should be paginated
6. Application should be responsive

## Installation

Use ```git clone``` to clone repository to your local directory.

Use node package manager to install dependencies

```bash
npm install
```

After installing dependencies start application
```bash
npm start
```

To run tests use
```bash
npm test
```

## Usage

To sort data on non mobile devices click on buttons placed in table head.
When data is fetched it's being sorted ascending by ID by default. To filter
companies, enter keyword to search box above the table. Under the table there is simple
pagination.

On mobile devices everything except sorting works the same. Sorting is now presented as
select with options.