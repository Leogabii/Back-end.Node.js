import Mysql from '../db/connections/Mysql.js';


export default class PermisosDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'permisos'
        this.#createTable()
    }

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
         (
             id INT AUTO_INCREMENT PRIMARY KEY,
             name VARCHAR(100) NOT NULL  
        )`
        this.connection.query(query)
    }

    async getAllPermisos() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los permisos')
            return []
        }
    }


    async getPermisoById(id) {
        const query = `SELECT * FROM ${this.table} WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }


    async getPermisoByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE name = '${name}'`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async addPermiso(permiso) {
        const { id, name } = permiso
        const query = `INSERT INTO ${this.table} VALUES (?,?)`
        const [result] = await this.connection.promise().query(query, [id, name])
        return result
    }


    async modifyPermiso(permiso) {
        const { id, name} = permiso
        const query = `UPDATE ${this.table} SET name = ? WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [name, id])
        return result
    }


    async deletePermiso(id) {
        const query = `DELETE FROM ${this.table} WHERE id = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
              }
