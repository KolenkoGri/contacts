"use strict";
const persons = [
    {
        name: "Иван Петров",
        age: 27,
        group: "SEO-специалист",
    },
    {
        name: "Марат Aляуддинов",
        age: 20,
        group: "Музыкант",
    },
    {
        name: "Алладин",
        age: 1000,
        group: "Мультфильм",
        role: "Admin",
    },
    {
        name: "Дружище",
        age: 30,
        group: "Друг",
    },
    {
        name: "Батя",
        age: 45,
        group: "Семья",
        role: "Admin",
    },
];
const logPerson = (user) => {
    console.log(`${user.name}, ${user.age}`);
};
persons.forEach(logPerson);
