"use strict";
{
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
    console.log("Users:");
    persons.forEach((logPerson) => {
        console.log(`${logPerson.name}, ${logPerson.age}, ${logPerson.role ? logPerson.role : ""}`);
    });
}
