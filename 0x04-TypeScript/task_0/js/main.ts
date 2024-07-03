interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Cobby',
  lastName: 'Sefah',
  age: 21,
  location: 'Accra',
};

const student2: Student = {
  firstName: 'Ifeoluwa',
  lastName: 'Adebayo',
  age: 27,
  location: 'Ogun state',
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
