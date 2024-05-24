window.promises = [];

function createPromise() {
  const randomDelay = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
}

// Create an array of 5 promises
const promises = Array.from({ length: 5 }, createPromise);

Promise.any(promises)
  .then((result) => {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });
