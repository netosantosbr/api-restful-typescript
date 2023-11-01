import mongoose from "mongoose";
import config from "config";

import Logger from "../config/logger";

async function connect() {
    const dbUri = config.get<string>("dbUri");

    try {
        await mongoose.connect(dbUri);
        Logger.info("Conectou ao banco de dados!");
    } catch (error) {
        Logger.error("Nao foi possivel conectar!");
        Logger.error(`Erro: ${error}`);
        process.exit();
    }
}

export default connect;