import { createConnection } from "typeorm";
import connectionOptions from "../../ormconfig";
import dotenv from "dotenv";
dotenv.config();

createConnection(connectionOptions);
