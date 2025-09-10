import { NumberSeries, type BaseOP } from "./NumberSeries.js";
import { NumberSeries2 } from "./NumberSeries2.js";

NumberSeries.help()
console.log(NumberSeries.rand(8));
const n = new NumberSeries(30,8)
n.run("print")

const s = new NumberSeries2(10,4)
s.run("print")