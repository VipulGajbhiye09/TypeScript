// Functions in TS
// Annotating parameters to accept values of particular type only
function addTwo (num : number){
    return num+2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

addTwo(9);

getUpper("somestring");

const loginUser = (name : string, isLoggedIn : boolean = false ) => {
    return "user";
};

// Here we specify that func must return a number using annotation
// Prevents returning unwanted value datatype
function getSquare (x : number) : number {
  return x*x;
}
getSquare(9);

// Arrow function
const getCube = (x: number): number => {
  return x^3;
}
getCube(7);

const names =["Mike","Jason","Anna"];

names.map((name) : string => {
  return `The name is ${name}`
})

// Void is used as return type when function doesn't return any value instead it may do some processing or calculation etc
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

// Never is a type that never returns a value
// The never type represents values which are never observed. 
//In a return type,this means that the function throws an exception or terminates execution of the program.

//never also appears when TypeScript determines there’s nothing left in a union.

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}