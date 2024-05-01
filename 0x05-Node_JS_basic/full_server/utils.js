/**
 * Reads a CSV file asynchronously and organizes student data by fields.
 * @param {string} path - The path to the CSV data file.
 * @returns {Promise<Object>} A Promise that resolves with an object containing arrays of student first names per field.
 * @throws {Error} If the database file cannot be loaded.
 */

const fs = require('fs');

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.trim().split('\n');
        const studentData = {};
        lines.forEach((line, index) => {
          if (index !== 0) {
            const separated = line.split(",");
            const firstName = separated[0];
            const field = separated[separated.length - 1].trim();
            if (!studentData[field]) {
              studentData[field] = [];
            }
            studentData[field].push(firstName);
          }
        });
        resolve(studentData);
      }
    });
  });
};

export default readDatabase;
module.exports = readDatabase;
