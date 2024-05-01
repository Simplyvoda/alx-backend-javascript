const fs = require('fs');

/**
 * Counts the number of students in the database
 * @param : datapath
 */

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(data).isFile()) {
    throw new Error('Cannot load the database');
  }
  
  try{
    // reading file synchronously
    const data = fs.readFileSync(path, 'utf-8')
    const lines = data.trim().split('\n');
    console.log(`Number of students: ${lines.length -1}\n`)
    const obj = {}
    lines.map((line, index) => {
      if (index!==0){
        const seperated = line.split(",")
        firstName = seperated[0]
        field = seperated[seperated.length-1].trim()
        if (!obj[field]){
          obj[field] = []
        }
        obj[field].push(firstName)
  
      }
      return obj
    })
    for (const [key, value] of Object.entries(obj)){
      const studentList = value.join(', ');
      console.log(`Number of students in ${key}: ${value.length}. List: ${studentList}\n`)
    }
  }catch(err){
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
