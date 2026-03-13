"use server"

import connectMongo from "@/dbConnect/connectMondo";
import UserModel from "@/models/UserModel";
import { revalidatePath } from "next/cache";

export const addUser = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name, email
    }

    try {
        await connectMongo();
        await new UserModel(userData).save();

        revalidatePath("/")
    } catch (error) {
        console.log(error);
    }

}


export const getUsers = async () => {
    try {
        await connectMongo();

        // get users
        const users = await UserModel.find();

        return users;
    } catch (err) {
        console.log(err);
    }
};
