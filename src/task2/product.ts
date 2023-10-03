export class Product {
    name: string;
    cost: number;

    constructor(name: string, cost: number) {
        this.name = name;
        this.cost = cost;
    }

    get getName() {
        return this.name;
    }

    get getCost() {
        return this.cost;
    }

    set setName(newName: string) {
        this.name = newName;
    }
    set setCost(newCost: number) {
        this.cost = newCost;
    }
}
