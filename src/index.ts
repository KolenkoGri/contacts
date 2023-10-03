import { Students } from "./students";
import { Employees } from "./staff";

const students = new Students();
const employees = new Employees();

students.add({
    id: 1,
    firstname: "Ilon",
    surname: "Mask",
    age: 22,
    year: 2,
    specialty: "asd",
});

students.add({
    id: 2,
    firstname: "Ilon",
    surname: "Mask",
    age: 23,
    year: 3,
    specialty: "aswd",
});

students.add({
    id: 3,
    firstname: "Ilon",
    surname: "Mask",
    age: 24,
    year: 4,
    specialty: "aswd",
});

students.add({
    id: 4,
    firstname: "Ilon",
    surname: "Mask",
    age: 26,
    year: 1,
    specialty: "asswd",
});

students.add({
    id: 5,
    firstname: "Ilon",
    surname: "Mask",
    age: 25,
    year: 3,
    specialty: "aaswd",
});

employees.add({
    id: 1,
    firstname: "Ilon",
    surname: "Mask",
    age: 26,
    post: "worker",
});

employees.add({
    id: 2,
    firstname: "Ilon",
    surname: "Mask",
    age: 26,
    post: "Teacher",
});

console.log(students);
console.log(employees);

students.remove(2);

console.log(students);

console.log(students.get(3));
console.log(employees.get(2));
