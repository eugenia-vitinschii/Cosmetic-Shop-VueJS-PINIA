// UpdateUserPayload

export interface UpdateUserPayload{
   email: string;
   username: string;
   role: "admin" | "user";
}