import "reflect-metadata"
import { DataSource } from "typeorm"
import { Address } from './entity/Address';
import { User } from './entity/User';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({

    type: 'postgres', // or mysql/sqlite etc.
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT || '5432'),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: false,
    entities: [User,Address],
    migrations: ['src/migrations/**/*.ts'],
    subscribers: [],
})

