//A tuple is a typed array with a pre-defined length and types for each index.
//Tuples are great because they allow each element in the array to be a known type of value.
//To define a tuple, specify the type of each element in the array:

// const user: (string | number)[] = [1, "hc"]
let tuple_user: [string, number, boolean];

tuple_user = ["hc", 131, true];

let rgb: [number, number, number] = [255, 123, 112];


type someUserTuple = [number, string];

const x_tuple: someUserTuple = [112, "example@google.com"];

// One big drawback of tuples is though they seem to be of fixed length and types, due to it being inherently arrays
// array methods still work on them like push() and pop() which may introduce bugs and may crash the app

x_tuple[1] = "hc.com";
x_tuple.push("some string");
