import { Model, DataTypes } from "sequelize";
import { database } from "../database";

export class Driver extends Model {
  public id!: number;
  public nombre!: string;
  public apellidos!: string;
}

Driver.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: DataTypes.STRING,
        apellidos: DataTypes.STRING
    },
    {
      tableName: "conductores",
      sequelize: database
    }
);