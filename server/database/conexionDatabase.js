import {Sequelize} from 'sequelize'

const dataBase = new Sequelize('joly', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default dataBase