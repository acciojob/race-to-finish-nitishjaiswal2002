window.promises = [];

function createPromise() {
  const randomDelay = Math.floor(Math.random() * 5) + 1; // Random number between 1 and 5
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
}

// Populate the window.promises array with 5 promises
window.promises = Array.from({ length: 5 }, createPromise);

function handlePromises() {
  Promise.any(window.promises)
    .then((result) => {
      const outputDiv = document.getElementById('output');
      outputDiv.textContent = result;
    })
    .catch((error) => {
      console.error(error);
    });
}

// Call the handlePromises function after populating the promises array
handlePromises();


