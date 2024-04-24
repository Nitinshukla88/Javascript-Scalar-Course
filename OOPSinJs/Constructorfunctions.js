// In JS, classes are built upon constructor functions. You can think of them as templates or blueprint to create objects.

function construct(name,age,rollno){
    this.name=name
    this.age=age
    this.rollno=rollno
}

let obj1=new construct("nitin",22,268)

console.log(obj1)