import mongoose from "mongoose";
export async function connectToDatabase() {
    const uri = process.env.MONGODB_URI;

    if (!uri) {
        throw new Error(
            "A Variável de ambiente MONGO_DB não existe."
        );
    }
    const dbName = process.env.MONGODB_DB_NAME || "ficha5_conspirações";

    try {
        await mongoose.connect(uri, {
            dbName,
        });
        console.log("Ligação ao mongo foi feita");
    }
    catch (error) {
        console.log("Erro ao ligar á base de dados", error);
        throw error;
    }
}