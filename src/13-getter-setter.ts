// Getters and setters allow you to define Object Accessors (Computed Properties). using get & set keywords

// Getter are used to access properties outside class & Setter are used to modify properties outside class
// IMP: set accessor don't have a return type annotation
class MyClass2 {
  // protected keyword allows property access to inherited child classes
  protected _courseCount = 1;

  readonly city: string = "Pune";

  constructor(private email: string, private name: string) {}

  //Getters
  get getGoogleEmail(): string {
    return `Google ${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  // Setter syntax (no return annotation)
  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count must be more than 1");
    }
    this._courseCount = courseNum;
  }
}

// Inheritance & accessing protected property
class SubUser extends MyClass2 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 6;
  }
}

