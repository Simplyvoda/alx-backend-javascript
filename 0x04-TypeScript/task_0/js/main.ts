interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const Student1: Student = {
  firstName: 'Vodina',
  lastName: 'Efem',
  age: 23,
  location: 'Lagos',
};

const Student2: Student = {
  firstName: 'Gigi',
  lastName: 'Eyo',
  age: 24,
  location: 'Abuja',
};

const studentsList: Array<Student> = [Student1, Student2];

function studentTable(){
  const table = document.createElement('table');
  const tableBody = document.createElement('tbody');

  studentsList.forEach((each) => {
    const row = document.createElement('tr');
    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = each.firstName;
    const locationCell = document.createElement('td');
    locationCell.textContent = each.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row)
  })
  table.appendChild(tableBody);
  document.body.appendChild(table);
}

studentTable();