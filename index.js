// import app from ".app/js";
import "dotenv/config";
import { connectToDataBase } from "./src/config/database";
import { application } from "express";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await connectToDataBase();
        app.listen(PORT, () => {
            console.log(`Servidor a correr na porta ${PORT}`);
        });

    } catch (error) {
        console.error("Erro Critico ao arrancar o servidor", error);
        process.exit(1);
    }
}