"use server"

import connectMongo from "@/dbConnect/connectMondo";
import UserModel from "@/models/UserModel";
import { cacheTag, revalidateTag } from "next/cache";

export const addUser = async (formData) => {
    const name = formData.get("name");
    const email = formData.get("email");

    const userData = {
        name, email
    }

    try {
        await connectMongo();
        await UserModel.create(userData);

        revalidateTag("users")
    } catch (error) {
        console.error(error);
        throw new Error("Failed to create user");
    }

}


export const getUsers = async () => {
    "use cache";

    cacheTag("users");
    try {
        await connectMongo();

        // get users
        const users = await UserModel.find().lean();

        return users ?? [];
    } catch (err) {
        console.error(error);
        return [];
    }
};
