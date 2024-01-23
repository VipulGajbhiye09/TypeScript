// Any is simply a marker in TypeScript which turns off type checks for that entity.
// Mostly use of any is discouraged as it works against the core utility of TypeScript.

let myVar;

function getData (){
    return "sample_string";
}

//Here myVar will be inferred as 'any' type by TypeScript compiler because it's unaware of data it will store in future
myVar= getData(); 

// say if function returns boolean instead of string it'll break the app as its unwanted 
// but TypeScript isn't stopping this, hence we must use type annotations and leverage TypeScript for app stability

let myStr : string;
myStr = getData();

//There's also a setting in TS config to set noImplicitAny to flag 'any' as an error