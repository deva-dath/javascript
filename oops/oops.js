var baleno={
    colors:["red","blue","white"],
    names: "baleno",
    price: "8 laks",
    varients: ["petrol"],
    manufacture: "nexa",
    getPrice(){
        return this.price
    }

}
var glanza={
    names: "glanza",
    manufacture: "toyota",
    price: "9 laks"

}
glanza.__proto__=baleno
console.log(glanza.getPrice());