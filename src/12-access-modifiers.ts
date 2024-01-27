// public access allows access beyond class definition whereas private restricts it to class only

// Specifying access modifier in constructor like so produces same js code as the class example commented below it
// Hence increasing code readability

class MyClass {
    readonly city: string = "pune"
    constructor(public email: string,public name: string){
    }
}

// class MyClass {

//     public email: string
//     public name: string
//     readonly city: string = "pune"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }

const obj1 = new MyClass("v@v","vipul");
obj1.name;
obj1.city;

