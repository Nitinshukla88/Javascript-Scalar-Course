// This is the base class..

class person{
    constructor(name, age,gender){
        this.Name=name
        this.Age=age
        this.Gender=gender
    }

    Greeting(){
        console.log(`Welcome ${this.Name}`)
    }
}

// This is the derived class. 
// We use "extends" keyword to inherit the properties of base class.

class Teacher extends person{
    constructor(name,age,gender,salary){
        super(name,age,gender)
        this.Salary=salary
    }
    // Here sayhello calls greeting method of Person class
    sayhello(){
        super.Greeting()
    }
}

// Above super constuctor is being called using super keyword to access all the properties and methods of Person class into Teacher class.

// We can also inherit methods using the same super keywerd. But this time, you have to call the super keyword using (.) operator as written above.

let obj1= new Teacher("Akshay", 34, "M",56000)

console.log(obj1)

obj1.sayhello()