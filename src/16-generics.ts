// Generics allow creating 'type variables' which can be used to create classes,
// functions & type aliases that don't need to explicitly define the types that they use.

// Generics makes it easier to write reusable code.

// Say we need a function that could accept string & number and return string or number accordingly.

// below doesn't work as it can accept 2 types but say if passed string it can still return number so lets tweaks it more for restrictions
function identityOne(val: string | number): string | number {
  return val;
}

// This broadens accept & return range but problems still stands
function identityTwo(val: any): any {
  return val;
}

// Solution is GENERICS below is generics example
// Generics gets works done as it accepts any type but logs the type internally so it returns same type as passed
function identityThree <Type> (val: Type): Type {
  return val;
}

// identityThree(true)

// Shortcut form same as identityThree function
function identityFour <T> (val: T) : T {
  return val;
}

// Passing interface or type alias also works
interface Backpack {
  brand: string;
  color: number;
}
// passing backpack 
identityFour <Backpack> ( {brand:"test",color:5} )


// Example of generic with multiple generic type
function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

// Accepting array parameter in generic
function getProducts<T>(products: T[]): T {
  // do some operations
  const myIndex = 3;
  return products[myIndex];
}

// Arrow function version of above function
const getMoreProducts = <T>(products: T[]): T => {
  //do some operations
  const myIndex = 4;
  return products[myIndex];
};

// 

interface Database {
  username: string;
  password: string;
}

function getData<T, U extends Database>(v1: T, v2: U): object {
  return {
    v1,v2
  };
}

getData(3,{username:"test",password:"test",connectionId:"test"});
