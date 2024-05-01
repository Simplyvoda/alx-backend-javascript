const fs = require('fs');

/**
 * Counts the number of students in the database asynchronously.
 * @param {string} path The path to the CSV data file.
 * @returns {Promise<void>} A Promise that resolves when the operation is complete.
 */
const countStudents = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        console.log(`Number of students: ${lines.length - 1}`);
        const obj = {};
        lines.forEach((line, index) => {
          if (index !== 0) {
            const separated = line.split(",");
            const firstName = separated[0];
            const field = separated[separated.length - 1].trim();
            if (!obj[field]) {
              obj[field] = [];
            }
            obj[field].push(firstName);
          }
        });
        for (const [key, value] of Object.entries(obj)) {
          const studentList = value.join(', ');
          console.log(`Number of students in ${key}: ${value.length}. List: ${studentList}`);
        }
        resolve();
      }
    });
  });
};

module.exports = countStudents;
