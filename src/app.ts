type BaseOP = "sum"|"multiplier" |"node"| "print"
class NumberSeries{
    private _count: number;
    private _v:number;
    private _list:number[];

    constructor(
        count:number, 
        v:number,
        rng: (max:number) => number
    ){
        if(count <=0) throw new Error("Számosság pozitív egsész szám");
        if(v<=0) throw new Error("A felső szám pozityv egész legyen");
        this._count=count
        this._v =v
        this._list = Array.from({length:count},()=>rng(v))
    }

    get values():readonly number[]{
        return this._list
    }

    set updateValues(arr:number[]){
        if(arr.length === 0) throw new Error("Nem lehet üres a lista");
        if(arr.every(n=>Number.isFinite(n) && n > 0)) throw new Error("Minden elem pozitiv egész legyen");

        this._list = {...arr};
        this._count = arr.length
        this._v = Math.max(...arr)
    }

    get count():number{return this._count}
    get v():number{return this._v}

    node(): number{
        const statistic: Record<number,number> = {}
        for(let n of this._list){
            (statistic[n] = statistic[n] ?? 0) + 1
        }

        let best = this._list[0]
        for(const k of Object.keys(statistic)){
            const key  = Number(k)
            if(statistic[key]! > statistic[best!]! ){
                best = key
            }
        }
        return best!;
    }

    sum() {return this._list.reduce((acc,n) => acc +n,0)}
    multiplier() {return this._list.reduce((acc,n) => acc *n,1)}

    run(op:BaseOP){
        switch(op){
            case "sum":
                console.log(`Összeg: ${this.sum()}`);
                break;
            case "multiplier":
                console.log(`Szorzet: ${this.multiplier()}`);
                break;
            
            case "node":
                console.log(`Legyakoribb: ${this}`);
            case "print":
                console.log(`Kiirás: ${this.values.join(", ")}`);
        }
    }

}