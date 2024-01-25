// An enum is a special "class" that represents a group of constants (unchangeable variables).

// Enums can be used to restrict users choice like in an e-commerce app user can only alter order status to order placed or order cancelled 
// it can't change order status to delivered

//Another example is flight tickets available to user must not be crew reserved seats and so on
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const mySeat = SeatChoice.AISLE;

//Numeric Enums - Default
//By default, enums will initialize the first value to 0 and add 1 to each additional value.

enum CardinalDirections1 {
  North,
  East,
  South,
  West
}
//Numeric Enums - Initialized
//You can set the value of the first numeric enum and have it auto increment from that:

enum CardinalDirections2 {
  North = 5,
  East,
  South,
  West
}

console.log(CardinalDirections2.North);
// logs 5
console.log(CardinalDirections2.West);
// logs 8

//Numeric Enums - Fully Initialized
//You can assign unique number values for each enum value. Then the values will not incremented automatically:

enum StatusCodes {
  NotFound = 404,
  Success = 200,
  Accepted = 202,
  BadRequest = 400
}

console.log(StatusCodes.NotFound);
// logs 404
console.log(StatusCodes.Success);
// logs 200