// async function fetchJoke() {
//     try {
//         const response = await fetch('https://api.api-ninjas.com/v1/jokes/');
//         const data = await response.json();
//         console.log(data);
//         const jokeText = data.joke || 'No joke found';
//         document.querySelector('.joke').textContent = jokeText;
//     } catch (error) {
//         console.error('Failed to fetch joke:', error);
//         document.querySelector('.joke').textContent = 'Failed to fetch joke. Please try again.';
//     }
// }


const jokeButton = document.getElementById("jokeButton");

function fetchJoke() {
    const apiKey = 'if+Ry13hlh5fqZRSLSSLBw==aA3QsIgcoVPQ0NXD'; // Replace 'YOUR_API_KEY' with your actual API key
    const btn = document.querySelector('.btn');
    btn.textContent = 'Loading...';

    fetch('https://api.api-ninjas.com/v1/jokes/', {
        headers: {
            'X-Api-Key': apiKey
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const joke = data[0].joke;
        const jokeText = joke || 'No joke found';
        document.querySelector('.joke').textContent = jokeText;
        btn.textContent = 'Tell Me A Joke'; // Reset button text
    })
    .catch(error => {
        console.error('Failed to fetch joke:', error);
        document.querySelector('.joke').textContent = 'Failed to fetch joke. Please try again.';
        btn.textContent = 'Tell Me A Joke'; // Reset button text
    });
}

jokeButton.addEventListener("click", fetchJoke);
