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

