window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
function getRandomTime() {
  return Math.floor(Math.random() * 5000) + 1000; // Random time between 1 and 5 seconds
}

function createRandomDelayPromise() {
  const delay = getRandomTime();
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${delay} milliseconds`);
    }, delay);
  });
}

const promises = Array.from({ length: 5 }, createRandomDelayPromise);

Promise.any(promises)
  .then((result) => {
    const outputElement = document.getElementById('output');
    outputElement.textContent = result;
  })
  .catch((error) => {
    console.error(error);
  });






