import { env } from "../../../utils/envalidUtils";

const DB_NAME = env.DB_NAME;
const DB_PASSWORD = env.DB_PASSWORD;
export default {
  client: "pg",
  connection: {
    host: "localhost",
    user: DB_NAME,
    password: DB_PASSWORD,
    database: "postgres",
  },
};
