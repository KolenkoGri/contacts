"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    name;
    cost;
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
    get getName() {
        return this.name;
    }
    get getCost() {
        return this.cost;
    }
    set setName(newName) {
        this.name = newName;
    }
    set setCost(newCost) {
        this.cost = newCost;
    }
}
exports.Product = Product;
