//Type predicates

// Type predicates in TypeScript are functions that return a boolean value and are used to narrow down the type of a variable.
// They are primarily used in conditional blocks to check whether a variable is of a particular type and then perform specific operations accordingly.
// Type predicates can be defined using the “is” keyword in TypeScript.

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return "fish food";
  } else {
    pet;
    return "bird Food";
  }
}