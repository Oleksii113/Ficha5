import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
            email: {
                type: String,
                require: true,
                unique: true,
                trim: true,
                lowercase: true,
                minlength: 5
        },
        displayName: {
            type: String,
            require: true,
            trim: true,
            minlength: 2,
        },
        passwordHash: {
            type: String,
            require: true,
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user",
        },
    },
    {
      timestamps: true,  
    }
);

const User = mongoose.model("User", userSchema);
export default User;