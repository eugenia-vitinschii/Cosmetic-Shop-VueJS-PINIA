// models/userModel.ts

export interface User {
   id: number;
   username: string;
   password: string;
   email: string;
   role: "admin" | "user";
}

//fake db

export const users: User[] = [
   {
      id: 1,
      username: "admin",
      password: "1234567890",
      email: "admin@mail.com",
      role: "admin"
   },
   {
      id: 2,
      username: "user",
      password: "0987654321",
      email: "usern@mail.com",
      role: "user"
   },
]