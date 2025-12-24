// UpdateUserPayload, UpdateMePayload

export interface UpdateUserPayload{
   email: string;
   username: string;
   role: "admin" | "user";
}

export interface UpdateMePayload{
   email: string;
   username: string;
}