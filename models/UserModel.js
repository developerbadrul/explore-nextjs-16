import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Anonymous",
        min: 2,
        max: 100
    },
    email: {
        type: String,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
        required: [true, "Email is required"],
        unique: true,
        minLength: 2,
        maxLength: 100,
    },

},
    {
        timestamps: true
    }
)


const UserModel = mongoose.models.User ?? mongoose.model("User", UserSchema)

export default UserModel;