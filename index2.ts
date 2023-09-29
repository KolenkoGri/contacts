type User = {
    name: string;
    age: number;
    group: string;
  };


type Admin = {
  name: string;
  age: number;
  group: string;
  role: string;
}

type Person = User | Admin;

const persons: Person[] = [
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

const logPerson = (user: User) => {
  console.log(`${user.name}, ${user.age}`);
};

persons.forEach(logPerson);