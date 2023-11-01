require("dotenv").config();

import express from "express";
import config from "config";

const app = express();

app.use(express.json());

import db from "../config/db";

import router from "./router";

import Logger from "../config/logger"

import morganMiddleware from "./middleware/morganMiddleware";

app.use(morganMiddleware);

app.use("/api/", router);

const port = config.get<number>("port");

app.listen(port, async () => {
    await db();

    Logger.info(`Application running on port ${port}`);
})

