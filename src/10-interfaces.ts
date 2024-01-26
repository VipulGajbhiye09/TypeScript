// Interfaces are similar to type aliases, except they only apply to object types.

//Type aliases and interfaces are very similar, and in many cases you can choose between them freely.
// Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

interface User2 {
    email: string,
    userId: number,
    googleId?: string
    // func_name: () => string
    func_name(): string
    func_name_2(username : string, value: number): number
}

//Re opening interface user2
interface User2 {
    githubToken: string
}

// extending admin2 to use user2's properties
interface Admin2 extends User2 {
  role: "sr-admin" | "jr-admin";
}

const some_user: Admin2 = {
  email: "v@v.com",
  userId: 55,
  role: "sr-admin",
  githubToken: "github",
  func_name: () => {
    return "trail started";
  },
  func_name_2: (name: "some_name", val: 10) => {
    return 10;
  },
};
