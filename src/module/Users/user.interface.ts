interface TUser {
  firstName: string;
  lastName: string;
  role: "user" | "admin" | "vendor";
  image?: string;
  email: string;
  password: string;
  dateOfBirth?: string;
}
