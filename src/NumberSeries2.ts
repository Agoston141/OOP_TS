import { NumberSeries, type BaseOP } from "./NumberSeries.js";

export class NumberSeries2 extends NumberSeries{
    div(){
        return this._list[0]
    }
}

const s = new NumberSeries2(10,4)
s.run("multiplier")