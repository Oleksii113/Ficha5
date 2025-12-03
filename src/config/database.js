import mongoose from "mongoose";
export async function connectToDataBase() {
    const uri = process.env.MONGODB_URL;

    if (!uri) {
        throw new Error(
            "A Variável de ambiente MONGO_DB não existe."
        );
    }
    const dbName = process.env.MONGODB_DB_NAME || "ficha5_conspirações";
}