// Overriding
class Parent{
    bike(){
        console.log("passion pro");
    }
}
class Child extends Parent{
    // to call parent method super used
    bike(){
        super.bike()
        // console.log("royal enfield");
    }
}
// Child class overrides the properties of parent class
var ch= new Child
ch.bike()