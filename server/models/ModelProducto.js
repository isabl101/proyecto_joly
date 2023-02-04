import Sequelize from "sequelize";
import dataBase from "../config/conexionDatabase.js";

const Producto = dataBase.define('productos', {
  nombre: {
    type: Sequelize.STRING
  },
  descripcion: {
    type: Sequelize.STRING
  },
  valor: {
    type: Sequelize.VARCHAR
  },
  cantidad: {
    type: Sequelize.REAL
  },
  fechaVencimiento: {
    type: Sequelize.DATE
  }
})

export default Producto