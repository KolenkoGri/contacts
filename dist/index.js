"use strict";
{
    class Job {
        _role;
        _salary;
        constructor(role, salary) {
            this._role = role;
            this._salary = salary;
        }
        work(personName) {
            console.log(`${personName} сейчас работает как ${this._role}`);
        }
        getSalaryInfo() {
            return this._salary;
        }
    }
    class Person {
        job;
        name;
        constructor(name, job) {
            this.name = name;
            this.job = job;
        }
        set jobChange(NewJob) {
            this.job = NewJob;
        }
        getSalary() {
            return this.job.getSalaryInfo();
        }
        work() {
            this.job.work(this.name);
        }
    }
    const teacher = new Job("Учитель", 25_000);
    const doctor = new Job("Доктор", 30000);
    const Ivan = new Person("Иван", teacher);
    const Olga = new Person("Ольга", doctor);
    console.log("teacher: ", teacher);
    console.log("doctorPers: ", doctor);
    Ivan.work();
    console.log(Ivan.getSalary());
    Olga.work();
    Olga.jobChange = doctor;
    console.log(Olga);
    console.log(Olga.getSalary());
}
