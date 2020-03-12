import { Model, DataTypes } from "sequelize";
import { database } from "../database";

export class Delivery extends Model {
  public id!: number;
  public nombre!: string;
  public apellidos!: string;
  public email!: string;
  public telefono!: string;
  public direccionEntrega!: string;
  public fechaEntrega!: Date;
  public franjaHoraEntrega!: string;
}

Delivery.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre: DataTypes.STRING,
        apellidos: DataTypes.STRING,
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        telefono: DataTypes.STRING,
        direccionEntrega: DataTypes.STRING,
        fechaEntrega: DataTypes.DATE,
        franjaHoraEntrega: DataTypes.STRING
    },
    {
      tableName: "pedidos",
      sequelize: database
    }
);