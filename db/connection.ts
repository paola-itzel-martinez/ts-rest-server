import { Sequelize } from "sequelize";

const db = new Sequelize(
  'ts_node_rest_api',
  'demo',
  'demo',
  {
    host: "localhost",
    dialect: "mysql",
  }
);

export default db;
