"use strict";
{
    const logPerson = (person) => {
        let information;
        if (person.role) {
            information = person.role;
        }
        else {
            information = person.group;
        }
        console.log(`${person.name}, ${person.age}, ${information}`);
    };
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
            role: "Friends",
        },
        {
            name: "Батя",
            age: 45,
            group: "Семья",
            role: "SuperAdmin",
        },
    ];
    persons.forEach(logPerson);
}
