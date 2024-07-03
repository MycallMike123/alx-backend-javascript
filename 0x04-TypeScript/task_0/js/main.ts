interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Michael',
  lastName: 'Mwangi',
  age: 26,
  location: 'Nairobi',
};

const student2: Student = {
  firstName: 'Charles',
  lastName: 'Anderson',
  age: 24,
  location: 'Kisumu',
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach(student => {
  const row = table.insertRow();
  const cell_1 = row.insertCell(0);
  const cell_2 = row.insertCell(1);

  cell_1.textContent = student.firstName;
  cell_2.textContent = student.location;
});

document.body.appendChild(table);
