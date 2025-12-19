//user model

import mongoose, {Schema, Document} from "mongoose";
import bcrypt from "bcrypt";

export interface IUser extends Document {
   username: string;
   email: string;
   password: string;
   role: "admin" | "user"
}


const UserSchema: Schema = new Schema<IUser> ({
   username: {type: String, required: true, unique: true},
   email: {type: String, required: true, unique: true},
   password: { type: String, required: true},
   role: { type: String, enum: ["admin", "user"], default: "user"}
}, {timestamps: true});

//hash password before saving if it was modified
UserSchema.pre<IUser>("save", async function (next){
   if (!this.isModified("password")) return next();

   const salt = await bcrypt.genSalt(10);
   this.password = await bcrypt.hash(this.password, salt);
   next()

})

UserSchema.set("toJSON", {
   transform: (_, ret) =>{
      ret.id = ret._id.toString();
      delete ret._id;
   }
})

export default mongoose.model<IUser>("User", UserSchema);