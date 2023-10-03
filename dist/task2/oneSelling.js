"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OneSelling = void 0;
const abstractSelling_1 = require("./abstractSelling");
class OneSelling extends abstractSelling_1.AbstractSelling {
    constructor(product, count) {
        super(product, count);
    }
    getPrice() {
        const price = +((this.item.cost - 10) * this.count).toFixed(2);
        return price;
    }
}
exports.OneSelling = OneSelling;
