import "reflect-metadata";
import { DataSource } from "typeorm";

import * as dotenv from "dotenv";
import { User } from "./entity/User";
import { Movie } from "./entity/Movie";

dotenv.config();

const {  DB_PORT,  NODE_ENV } =
    process.env;

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: parseInt(DB_PORT || "5432"),
    username: "postgres",
    password: "postgress",
    database: "UserDB",

    synchronize: NODE_ENV === "dev" ? false : false,
//logging logs sql command on the treminal
    logging: NODE_ENV === "dev" ? false : false,
    entities: [User, Movie],
    migrations: [__dirname + "/migration/*.ts"],
    subscribers: [],
});
