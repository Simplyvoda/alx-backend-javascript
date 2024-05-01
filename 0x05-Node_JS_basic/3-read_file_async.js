const fs = require('fs');

/**
 * Counts the number of students in the database
 * @param {string} path The path to the CSV data file.
 */

const countStudents = (path) => {
  fs.stat(path, (err, stats) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    if (!stats.isFile()) {
      throw new Error('Cannot load the database');
    }
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        throw new Error('Error reading the file');
      }
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
    });
  });
};

module.exports = countStudents;
