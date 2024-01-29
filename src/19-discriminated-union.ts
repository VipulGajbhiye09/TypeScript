// Discriminating Unions
// A common technique for working with unions is to have a single field which uses literal types which you can use to let TypeScript narrow down the possible current type.

// & Union Exhaustiveness checking with never type

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  side: number;
}

interface Rectangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type Shape = Circle | Square | Rectangle;

function getSomeShape(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  }
  // this wont work as after checking for circle shape can be square or rect and rect doesn't have side prop
  // return shape.side * shape.side
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;

    case "square":
      return shape.side * shape.side;

    case "rectangle":
      return shape.length * shape.width;

      // default case must be present with never type 
    default:
      const _defaultforshape: never = shape;
      return _defaultforshape;
  }
}
 