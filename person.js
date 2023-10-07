class person {
    constructor(name,place,job){
        this.name = name;
        this.place = place;
        this.job = job;
        
    }

    getDetails(){
        return(`The name of the person is ${this.name} works at ${this.place} as a ${this.job}`)
    }
}

let person1 = new person ("RAM","MADURAI","IT")
let person2 = new person ("KATHRI","THENI","SOFTFORE DEVELOPER")



console.log(person1.getDetails());
console.log(person2.getDetails())
