const fs = require('fs').promises;

// Write to file using Promises
const writeFilePromise = () => {
  return fs.writeFile('userData.txt', 'Hello, this is a test message!')
    .then(() => {
      console.log('Success!');
    });
};

// Read from file using Promises
const readFilePromise = () => {
  return fs.readFile('userData.txt', 'utf-8')
    .then((data) => {
      console.log('Data:', data);
    });
};

// Execution flow
writeFilePromise()
  .then(readFilePromise)
  .catch((err) => {
    console.error('Error during file operations', err);
  });
