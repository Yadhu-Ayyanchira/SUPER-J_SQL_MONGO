import databaseConfig from "../../config/dbConfig.js";
import { Sequelize, DataTypes } from "sequelize";
import createUsersModel from "./users.js";
import createTokenModel from "./token.js";

const sequelize = new Sequelize(
  databaseConfig.DATABASE,
  databaseConfig.USER,
  databaseConfig.PASSWORD,
  {
    host: databaseConfig.HOST,
    dialect: databaseConfig.DIALECT,
  }
);

const db = {
  Sequelize,
  models: {
    User: createUsersModel(sequelize, {DataTypes}),
    Token: createTokenModel(sequelize, {DataTypes})
  },
};

export default db;
