import { ConnectionOptions } from "typeorm";
export default {
  type: "postgres",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.PASSWORD_DB,
  host: process.env.DB_HOST,
  migrations: [__dirname + "/src/database/migrations/*{.ts,.js}"],
  entities: [__dirname + "/src/models/*{.ts,.js}"],
  cli: {
    migrationsDir: "./src/database/migrations",
  },
  cache: false,
  synchronize: true,
} as ConnectionOptions;
