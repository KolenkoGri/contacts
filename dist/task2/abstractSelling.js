"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSelling = void 0;
class AbstractSelling {
    item;
    count;
    constructor(item, count) {
        this.item = item;
        this.count = count;
    }
    get getItem() {
        return this.item;
    }
    get getCount() {
        return this.count;
    }
    set setItem(newItem) {
        this.item = newItem;
    }
    set setCount(newCount) {
        this.count = newCount;
    }
    compare(a, b) {
        if (a.getPrice() > b.getPrice())
            return 1;
        if (a.getPrice() < b.getPrice())
            return -1;
        return 0;
    }
}
exports.AbstractSelling = AbstractSelling;
