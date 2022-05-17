//Data structure are collections of values, the relationships among them and the functions or operations that can be applied to the data

//array data structure store an value and the relationship among value like index in array and than we have method like push pop etc are operation performed on that data

//class - blue print for creating an objects with pre-defined properties and methods
//javascript is not techniqaly an object oriented programming the class is not exactly class in javascript 
class Student
{
    constructor(firstName,lastName,year)
    {
        this.firstName = firstName
        this.lastName = lastName
        this.grade = year
        this.tardies = 0
        this.scores = []
    }
    fullName()
    {
        return `your full name is ${this.firstName} ${this.lastName}`
    }
    markLate()
    {
        this.tardies += 1
        if(this.tardies > 3){
            return `YOU ARE EXPLELLED`
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies}`
    }
    addScore(score)
    {
        this.scores.push(score)
        return this.scores;
    }
    calculateAverage()
    {
        let sum  = this.scores.reduce((a,c)=> a + c)
        return sum/this.scores.length
    }
    static enrollStudent(){
        return "ENROLL STUDENT"
    }
}

const firstStudent = new Student("colt","steel",3)
const secondStudent = new Student("venkatesh","maik",5)
console.log(firstStudent.fullName()) //your full name is colt steel
console.log(secondStudent.fullName()) //your full name is venkatesh maik
console.log(firstStudent.markLate())//  colt steel has been late 1
console.log(firstStudent.markLate())//  colt steel has been late 2
console.log(firstStudent.markLate())//  colt steel has been late 3
console.log(firstStudent.markLate())// YOU ARE EXPLELLED!
console.log(firstStudent.tardies) //4
console.log(secondStudent.addScore(98)) //[98]
console.log(secondStudent.addScore(76)) //[98,76]
console.log(secondStudent.addScore(100)) // [98,76,100]
console.log(secondStudent.calculateAverage())//91.333

//CLASS METHOD
//firstStudent.enrollStudent //not defined arror 
console.log(Student.enrollStudent()) //"ENROLL STUDENT"


class Point
{
    constructor(x,y)
    {
        this.x = x
        this.y = y
    }
    //distance is a class Method where we pass two object which is created from same class to calculate which is cleaner way to do so
    static distance(a, b)
    {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.hypot(dx,dy)
    }
}

const p1 = new Point(5,5)
const p2 = new Point(10,10)
console.log(Point.distance(p1,p2))//7.0710678118654755

//instance method - are methods which can be access only by creating an object
//class method - which are static method in which we can access without creting an object