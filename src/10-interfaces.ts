// Interfaces are similar to type aliases, except they only apply to object types.

interface User2 {
    email: string,
    userId: number,
    googleId?: string
    // func_name: () => string
    func_name(): string
    func_name_2(username : string, value: number): number
}

const some_user: User2 = {
  email: "v@v.com",
  userId: 55,
  func_name: () => {
    return "trail started";
  },
  func_name_2: (name: "some_name", val: 10) => {
    return 10;
  },
};
