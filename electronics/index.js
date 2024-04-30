class Bulb{
    constructor(w){
        this.w = w;
    }
    getWattage(){
        return this.w;
    }
}
module.exports = function (){
    var b = new Bulb(60);
    return b;
}