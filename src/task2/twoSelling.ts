import { AbstractSelling } from "./abstractSelling";
import { Product } from "./product";

export class TwoSelling extends AbstractSelling {
    countForDiscount: number;
    constructor(product: Product, count: number, countForDiscount: number) {
        super(product, count);
        this.countForDiscount = countForDiscount;
    }

    override getPrice(): number {
        const price =
            this.count >= this.countForDiscount
                ? +(this.item.cost * this.count * 0.9).toFixed(2)
                : +(this.item.cost * this.count);
        return price;
    }
}
