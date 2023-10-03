import { AbstractSelling } from "./abstractSelling";
import { Product } from "./product";
export class OneSelling extends AbstractSelling {
    constructor(product: Product, count: number) {
        super(product, count);
    }

    override getPrice(): number {
        const price = +((this.item.cost - 10) * this.count).toFixed(2);
        return price;
    }
}
