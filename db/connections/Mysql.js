import mysql from 'mysql2'
import config from '../config/mysql.config.js'

export default class Mysql {

    constructor() {
             this.connection = mysql.createPool(config)
            this.connection = mysql.createConnection(config)
       /* this.connection = mysql.createConnection(
            {
            host:'localhost',
            user:'root',
            password:'38655155iam',
            port:'3306',
            database:'tienda-ropa'
            }
        )*/
        this.tryConnection()
    }

    tryConnection() {
        this.connection.connect(err => {
            err
                ? console.error('No se pudo conectar a la DB')
                : console.log('Conectado a la DB')
        })
    }

}