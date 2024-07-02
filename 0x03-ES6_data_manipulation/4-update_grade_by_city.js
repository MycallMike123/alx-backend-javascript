export default function updateStudentGradeByCity(students, city, newGrades) {

  if (
    !Array.isArray(students)
    || students.length === 0
    || !Array.isArray(newGrades)
    || newGrades.length === 0
  ) {
    return [];
  }

  const studentsByCity = students.filter((std) => std.location === city);

  return studentsByCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: studentGrade ? studentGrade.grade : 'N/A',
    };
  });
}
