// Type alias is like custom type combining primitive types in TypeScript
// Type Aliases allow defining types with a custom name (an Alias).

// TypeScript allows types to be defined separately from the variables that use them.
//Aliases and Interfaces allows types to be easily shared between different variables/objects.


//Type Aliases can be used for primitives like string or more complex types such as objects and arrays:

// Custom type myUser
type myUser = {
    name: string;
    email: string;
    isActive: boolean
}

// function accepts a arg of type myUser also returns a myUser type value
function createUser(u: myUser): myUser{
    return {name: "", email: "", isActive: true}
}

// createUser({name: "", email: "", isActive: true})

// readonly keyword 
type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails ?: number; // ? is optional operator to make the property optional
};

let myUser : User = {
  _id: "12345",
  name: "v",
  email: "v@v.com",
  isActive: true,
};

// Combining types 
type cardNumber = {
  cardnumber: number;
};

type cardDate = {
  cardDate: string;
};

type cardCVV = {
  cardCVV: string;
};

type cardDetails = cardNumber & cardDate & cardCVV ;
