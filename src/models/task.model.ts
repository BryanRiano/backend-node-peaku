import { Model, DataTypes } from "sequelize";
import { database } from "../database";
import { Delivery } from './delivery.model'; 

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
        fecha: DataTypes.DATEONLY
    },
    {
      tableName: "tareas",
      sequelize: database
    }
);

Task.hasOne(Delivery, {
  sourceKey: "idpedido",
  foreignKey: "id",
  as: "pedido"
});