import Mysql from '../db/connections/Mysql.js';


export default class CategoriasDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'categorias'
        this.#createTable()
    }

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
             id INT AUTO_INCREMENT PRIMARY KEY,
             name VARCHAR(100) NOT NULL  
        )`
        this.connection.query(query)
    }

    async getAllCategorias() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los categorias')
            return []
        }
    }


    async getCategoriaById(id) {
        const query = `SELECT * FROM ${this.table} WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [id])
        return result
    }


    async getCategoriaByName(name) {
        const query = `SELECT * FROM ${this.table} WHERE name = '${name}'`
        const [result] = await this.connection.promise().query(query)
        return result
    }

    async addCategoria(categoria) {
        const { id, name } = categoria
        const query = `INSERT INTO ${this.table} VALUES (?,?)`
        const [result] = await this.connection.promise().query(query, [id, name])
        return result
    }


    async modifyCategoria(categoria) {
        const { id, name} = categoria
        const query = `UPDATE ${this.table} SET name = ? WHERE id = ?`
        const [result] = await this.connection.promise().query(query, [name, id])
        return result
    }


    async deleteCategoria(id) {
        const query = `DELETE FROM ${this.table} WHERE id = ${id}`
        const [result] = await this.connection.promise().query(query)
        return result
    }
}