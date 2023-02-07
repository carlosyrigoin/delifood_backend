import { Schema, model } from "mongoose";
import * as bcrypt from "bcryptjs";

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: Number,
    },
    address: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String,
    },
});

userSchema.pre("save", function(next){
    const user = this
    if (!user.isModified("password")) return next()

    bcrypt.genSalt(10, function(err, salt){
        if (err) return next(err)

        bcrypt.hash(user.password, salt, function(err, hash){
            if (err) return next(err)
            user.password = hash
            next()
        })
    })
});

const User = model("User", userSchema);
export default User;