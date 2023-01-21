const student = {
  name: "Usuf Ali",
  age: 26,
};

// console.log(student);cons
student.subject = "CSE";

const entries = Object.entries(student);
console.log(entries);

for (const [key, value] of entries) {
  console.log(key, value);
}
