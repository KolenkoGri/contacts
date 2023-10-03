import { Product } from "./product";

export abstract class AbstractSelling {
    item: Product;
    count: number;

    constructor(item: Product, count: number) {
        this.item = item;
        this.count = count;
    }

    get getItem() {
        return this.item;
    }

    get getCount() {
        return this.count;
    }

    set setItem(newItem: Product) {
        this.item = newItem;
    }
    set setCount(newCount: number) {
        this.count = newCount;
    }

    abstract getPrice(): number;

    compare(a: AbstractSelling, b: AbstractSelling): number {
        if (a.getPrice() > b.getPrice()) return 1;
        if (a.getPrice() < b.getPrice()) return -1;
        return 0;
    }
}
