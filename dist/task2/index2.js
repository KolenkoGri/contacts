"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("./product");
const oneSelling_1 = require("./oneSelling");
const twoSelling_1 = require("./twoSelling");
const potato = new product_1.Product("Картофель", 50);
const seasonTicket = new product_1.Product("Абонемент", 10_000);
const notebook = new product_1.Product("Ноутбук", 15_000);
const bud = new product_1.Product("Почка", 25_000);
const car = new product_1.Product("Автомобиль", 6_000_000);
const house = new product_1.Product("Дом", 25_000_000);
const keyboard = new product_1.Product("Клавиатура", 10_000);
const icecream = new product_1.Product("Мороженое", 200);
const firstSell = new oneSelling_1.OneSelling(potato, 10);
const secondSell = new oneSelling_1.OneSelling(seasonTicket, 3);
const thirdSell = new oneSelling_1.OneSelling(notebook, 5);
const fourthSell = new oneSelling_1.OneSelling(bud, 5);
const fifthSell = new twoSelling_1.TwoSelling(car, 2, 2);
const sixthSell = new twoSelling_1.TwoSelling(house, 4, 2);
const seventhSell = new twoSelling_1.TwoSelling(keyboard, 40, 50);
const eighthSell = new twoSelling_1.TwoSelling(icecream, 400, 100);
const sells = [
    firstSell,
    secondSell,
    thirdSell,
    fourthSell,
    fifthSell,
    sixthSell,
    seventhSell,
    eighthSell,
];
sells.sort((a, b) => {
    if (a.getPrice() > b.getPrice())
        return 1;
    if (a.getPrice() < b.getPrice())
        return -1;
    return 0;
});
console.log(sells);
