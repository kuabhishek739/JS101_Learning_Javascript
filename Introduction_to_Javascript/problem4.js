const student = {
  name: "Vineet Sharma",
  school: "ABC School",
  grade: 10,
  section: "A",
  rollNo: 21,
  marks: [95, 90, 85]
};

const reportCard = `
+-------------------------------------------+
|     REPORT CARD                           |
|-------------------------------------------|
| Name: ${student.name.padEnd(37)}|
| School: ${student.school.padEnd(33)}|
| Grade: ${student.grade.toString().padEnd(37)}|
| Section: ${student.section.padEnd(35)}|
| Roll No: ${student.rollNo.toString().padEnd(34)}|
|-------------------------------------------|
| Subject 1: ${student.marks[0].toString().padEnd(31)}|
| Subject 2: ${student.marks[1].toString().padEnd(31)}|
| Subject 3: ${student.marks[2].toString().padEnd(31)}|
+-------------------------------------------+
`;

console.log(reportCard);
