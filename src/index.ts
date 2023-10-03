{
  class Job {
    protected _role: string;
    protected _salary: number;

    constructor(role: string, salary: number) {
      this._role = role;
      this._salary = salary;
    }

    public work(personName: string): void {
      console.log(`${personName} сейчас работает как ${this._role}`);
    }
    getSalaryInfo() {
      return this._salary;
    }
  }

  class Person {
    protected job: Job;
    protected name: string;

    constructor(name: string, job: Job) {
      this.name = name;
      this.job = job;
    }

    set jobChange(NewJob: Job) {
      this.job = NewJob;
    }

    getSalary() {
      return this.job.getSalaryInfo();
    }

    work(): void {
      this.job.work(this.name);
    }
  }

  const teacher: Job = new Job("Учитель", 25_000);
  const doctor: Job = new Job("Доктор", 30000);

  const Ivan: Person = new Person("Иван", teacher);
  const Olga: Person = new Person("Ольга", doctor);

  console.log("teacher: ", teacher);
  console.log("doctorPers: ", doctor);

  Ivan.work();
  console.log(Ivan.getSalary());
  Olga.work();
  Olga.jobChange = doctor;
  console.log(Olga);
  console.log(Olga.getSalary());
}
