import { Model, DataTypes } from "sequelize";
import { database } from "../database";

export class Task extends Model {
  public id!: number;
  public idconductor!: number;
  public idpedido!: number;
  public fecha!: Date;
}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        idconductor: DataTypes.INTEGER,
        idpedido: DataTypes.INTEGER,
        fecha: DataTypes.DATE
    },
    {
      tableName: "tareas",
      sequelize: database
    }
);