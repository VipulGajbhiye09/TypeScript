// Objects

const vipulObj = {
    name: "vipul",
    email: "v@v.com",
    isActive: true
}
// Syntax for passing obj to function
function create_user({ name, isPaid }: { name: string; isPaid: boolean }) {
    console.log("user created")
}

// ODD BEHAVIOR OF OBJECTS

// Below line isn't allowed as it tries to pass 3 arguments but func accepts only 2 args
// createUser({ name: "vipul", isPaid: false, email: "v@v.com" });

// Odd part is by declaring it as a variable then passing that var to func is accepted as shown below
let newUser = { name: "vipul", isPaid: false, email: "v@v.com" };
create_user(newUser)

// Return obj from function
function createCourse():{name: string, price: number}{
    return {name: "react.js", price: 399}
}

