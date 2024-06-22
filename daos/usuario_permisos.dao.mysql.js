import Mysql from '../db/connections/Mysql.js';


export default class UsuarioPermisosDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'usuario_permisos'
        this.#createTable()
    }

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
         (
             usuario_id INT,
             permiso_id INT,
             FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE,
             FOREIGN KEY (permiso_id) REFERENCES permisos(id) ON DELETE CASCADE,
             PRIMARY KEY (usuario_id, permiso_id)
        )`
        this.connection.query(query)
    }

    async getAllUsersPermisos() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los usuarios con sus permisos')
            return []
        }
    }


    async getUsersPermisoById(id) {
        const query = `SELECT * FROM ${this.table} WHERE usuario_id = ?`
        const [result] = await this.connection.promise().query(query, [usuario_id.])
        return result
    }


    async addUsersPermiso(usuarioPermiso) {
        const { usuario_id, permiso_id } = usuarioPermiso
        const query = `INSERT INTO ${this.table} VALUES (?,?)`
        const [result] = await this.connection.promise().query(query, [usuario_id, permiso_id])
        return result
    }


    async deleteUsersPermiso(id) {
        const query = `DELETE FROM ${this.table} WHERE usuario_id = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}