class uber{
    constructor(minfare,pricekm,waitcharg)
    {
        this.minfare=minfare;
        this.pricekm=pricekm;
        this.waitcharg=waitcharg;
    }
    calc(km,min)
    {
        let amnt= (this.pricekm*km)+(this.waitcharg*min)
        if(amnt>100)
        {
            return amnt
        }
        else{
            return this.minfare
        }
        //return this.minfare+(this.pricekm*km)+(this.waitcharg*min);
        
    }
}
const fare= new uber(100,10,5)
// let distance=8;
// let wait=1;
console.log(`the amnt for uber is Rs: ${fare.calc(80,2)}`);
 // distance,wait