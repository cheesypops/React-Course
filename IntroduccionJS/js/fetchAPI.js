const url = 'https://jsonplaceholder.typicode.com/comments';

fetch(url)
  .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('Error:', error));

// Async/Await
const fetchData = async () => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('Error:', error.message);
    }
}

fetchData();