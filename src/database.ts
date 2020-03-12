import {Sequelize} from 'sequelize';

export const database = new Sequelize('empresapedidos','root','',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        timestamps: false
    }
  });