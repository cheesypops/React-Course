//performance y multiple sync await

const url = 'https://jsonplaceholder.typicode.com/comments';
const url2 = 'https://jsonplaceholder.typicode.com/todos';

const fetchData = async () => {
    try {
        const init = performance.now();

        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);

        const end = performance.now();
        console.log('Time:', end - init);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchData();

// version multiple

const fetchData2 = async () => {
    try {
        const init = performance.now();

        const [response, response2] = await Promise.all([fetch(url), fetch(url2)]);

        if(!response.ok || !response2.ok) {
            throw new Error('Network response was not ok');
        }

        const [data, data2] = await Promise.all([response.json(), response2.json()]);
        
        console.log(data);
        console.log(data2);

        const end = performance.now();
        console.log('Time:', end - init);
    } catch (error) {
        console.log('Error:', error.message);
    }
}