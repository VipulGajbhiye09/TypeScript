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