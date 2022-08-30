'use strict';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const getUsers = async () => {
    try {
        const response = await fetch (API_URL);
        const data = await response.json();
        const companyData = await data.filter((comp) => {
            return comp.company.name === 'Johns Group';
        })
        console.log(companyData);
    }   catch (error) {
        console.error(error);
    }
}

getUsers();