export default function getStudentsByLocation(students, city) {
  // const listOfStudents = getListStudents();

  return students.filter((student) => student.location === city);
}
