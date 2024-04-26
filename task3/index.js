const axios = require('axios');


async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response?.data;
    } catch (error) {
        throw new Error(`Error fetching data: ${error}`);
    }
}


async function postData(url, data, token) {
    try {
        const response = await axios.post(url, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        console.log('Success')
        return response.data;
    } catch (error) {
        throw new Error(`Error posting data: ${error}`);
    }
}


function processQueries(data, queries) {
    const result = [];
    for (const query of queries) {
        const [l, r] = query.range;
        let sum = 0;
        for (let i = l; i <= r; i++) {
            if (query.type === "1") {
                sum += data[i];
            } else if (query.type === "2") {
                if (i % 2 === 0) {
                    sum += data[i]; 
                } else {
                    sum -= data[i]; 
                }
            }
        }
        result.push(sum);
    }
    return result;
}


async function main() {
    const inputURL = 'https://share.shub.edu.vn/api/intern-test/input';
    const outputURL = 'https://share.shub.edu.vn/api/intern-test/output';

    try {
        const inputData = await fetchData(inputURL);
        const { data, query, token } = inputData;        
        const result = processQueries(data, query);
        console.log(result)
        await postData(outputURL, result, token); 
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
