//TypeScript Union Type Narrowing
//Since a variable of a union type can assume one of several different types, you can help TS infer the correct variable type using type narrowing. 
//To narrow a variable to a specific type, implement a type guard.
// Use the typeof operator with the variable name and compare it with the type you expect for the variable.

// We need this as TypeScript infers basic types accurately like boolean,string,number,etc but
// typeof [] => object 
// typeof [1,2,3] => object 
// typeof null => object 
// hence we need Type Narrowing

function detectType(val: number | string) {
  if (typeof val === "string") {
    // val inferred as number
    return val.toLowerCase();
  }
  // val inferred as number
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    // check for non null
    console.log("Please provide ID");
    return;
  }
  id.toLowerCase();
}
