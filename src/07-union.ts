// Union types are used when a value can be more than a single type.
//  union operator is | 
let score: number | string = 33;
score = 44;
score = "55";

// custom types
type user = {
  username: string;
  id: number;
};

type Admin = {
  admin_username: string;
  id: number;
};

//  var can be of any 2 of custom type
let vipul: user | Admin = { username: "vipul", id: 42 }; // of type user here

vipul = { admin_username: "vg", id: 42 }; // override by type admin here

// using union may run into bugs if function body code isn't considering data of both types  
function getDbId(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
  else{
    id.toFixed(2)
  }
}
getDbId(3);
getDbId("3");
//array

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: (string | number | boolean)[] = ["1", "2", 3, true];

// only 3 possible values of variable
let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
// seatAllotment = "crew"
