class Animal {
    constructor(name,weight) {
        this.name = name;
        this.weight = weight;
    }
    setName(newName){
        this.name = newName;
    }
    setWeight(newWeight){
        this.weight = newWeight;
    }
    getName(){
        return this.name;
    }
    getWeight(){
        return `${this.weight}`;
    }
    toString(){
        return `name is ${this.name}, weight is ${this.weight}`;
    }
}
let objAnimal1 = new Animal("Elephant","45,6");
console.log(objAnimal1.toString());

let objAnimal2 = new Animal ("Pig","30");
objAnimal2.setName("Mouse");
console.log(objAnimal2.getName());

