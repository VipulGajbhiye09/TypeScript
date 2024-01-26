// TypeScript adds types and visibility modifiers to JavaScript classes.
// TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types

class UserClass {
    email: string
    name: string
    city : string ="pune";
    constructor(email: string, name: string){
        this.email = email;
        this.name = name;

    }
}

const vipul_object = new UserClass("v@v.com","vipul");
