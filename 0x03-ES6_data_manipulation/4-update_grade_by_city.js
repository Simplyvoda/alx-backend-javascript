export default function updateStudentGradeByCity(students, city, grades) {
  const studentsToUpdate = students
    .filter((student) => student.location === city)
    .map((student) => {
      const newGrade = grades
        .filter((each) => each.studentId === student.id)
        .map((each) => each.grade)
        .join();
      student.grade = newGrade !== null || newGrade !== undefined ? newGrade : 'N/A';
      return student;
    });

  return studentsToUpdate;
}
