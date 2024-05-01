const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 1245;
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

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
	const reportParts = [];
        const lines = data.trim().split('\n');
        reportParts.push(`Number of students: ${lines.length - 1}`);
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
          reportParts.push(`Number of students in ${key}: ${value.length}. List: ${studentList}`);
        }
        resolve(reportParts.join('\n'));
      }
    });
  });
};

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const responseParts = ['This is the list of our students'];

  countStudents(DB_FILE)
    .then((report) => {
      responseParts.push(report);
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    })
    .catch((err) => {
      responseParts.push(err instanceof Error ? err.message : err.toString());
      const responseText = responseParts.join('\n');
      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});

module.exports = app;
