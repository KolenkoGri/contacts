"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoSelling = void 0;
const abstractSelling_1 = require("./abstractSelling");
class TwoSelling extends abstractSelling_1.AbstractSelling {
    countForDiscount;
    constructor(product, count, countForDiscount) {
        super(product, count);
        this.countForDiscount = countForDiscount;
    }
    getPrice() {
        const price = this.count >= this.countForDiscount
            ? +(this.item.cost * this.count * 0.9).toFixed(2)
            : +(this.item.cost * this.count);
        return price;
    }
}
exports.TwoSelling = TwoSelling;
