import "dotenv/config";
import Sequelize from "sequelize";

export const sequelize = new Sequelize("demo", "saairaam", "", {
  host: "localhost",
  dialect: "postgres",
});
