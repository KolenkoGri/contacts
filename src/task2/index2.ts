import { Product } from "./product";
import { AbstractSelling } from "./abstractSelling";
import { OneSelling } from "./oneSelling";
import { TwoSelling } from "./twoSelling";

const potato = new Product("Картофель", 50);
const seasonTicket = new Product("Абонемент", 10_000);
const notebook = new Product("Ноутбук", 15_000);
const bud = new Product("Почка", 25_000);
const car = new Product("Автомобиль", 6_000_000);
const house = new Product("Дом", 25_000_000);
const keyboard = new Product("Клавиатура", 10_000);
const icecream = new Product("Мороженое", 200);

const firstSell = new OneSelling(potato, 10);
const secondSell = new OneSelling(seasonTicket, 3);
const thirdSell = new OneSelling(notebook, 5);
const fourthSell = new OneSelling(bud, 5);
const fifthSell = new TwoSelling(car, 2, 2);
const sixthSell = new TwoSelling(house, 4, 2);
const seventhSell = new TwoSelling(keyboard, 40, 50);
const eighthSell = new TwoSelling(icecream, 400, 100);

const sells: AbstractSelling[] = [
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
    if (a.getPrice() > b.getPrice()) return 1;
    if (a.getPrice() < b.getPrice()) return -1;
    return 0;
});

console.log(sells);
