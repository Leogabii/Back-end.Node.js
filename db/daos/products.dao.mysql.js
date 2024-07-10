import Mysql from '../connections/Mysql.js';


export default class ProductsDaoMysql extends Mysql {

    constructor() {
        super()
        this.table = 'productos'
        this.#createTable()
    }

    #createTable() {
        const query = `CREATE TABLE IF NOT EXISTS ${this.table}(
             id INT AUTO_INCREMENT PRIMARY KEY,
             name VARCHAR(100) NOT NULL,
             descripcion VARCHAR(100) NOT NULL,
             precio DECIMAL(10, 2) NOT NULL,
             img VARCHAR(100) NOT NULL,
             codigo INT,
             stock INT,
             activo TINYINT(1) NOT NULL,
             categoria_id INT,
             FOREIGN KEY (categoria_id) REFERENCES categorias(id) ON DELETE SET NULL
        )`
        this.connection.query(query)
    }

    async getAllProducts() {
        try {
            const query = `SELECT * FROM ${this.table}`
            const [result] = await this.connection.promise().query(query)
            return result
        }

        catch (err) {
            console.log('Problemas al obtener los productos')
            return []
        }
    }

async addProducto(producto) {
    const { id, name, descripcion, precio, img, codigo, stock, activo, categoria_id } = producto
    const query = `INSERT INTO ${this.table} VALUES (?,?,?,?,?,?,?,?,?)`
    const [result] = await this.connection.promise().query(query, [id, name, descripcion, precio, img, codigo, stock, activo, categoria_id ])
    return result
}

async deleteProducto(id) {
    const query = `DELETE FROM ${this.table} WHERE id = ${id}`
    const [result] = await this.connection.promise().query(query)
    return result
}
async getProductoById(id) {
    const query = `SELECT * FROM ${this.table} WHERE id = ?`
    const [result] = await this.connection.promise().query(query, [id])
    return result
}
async modifyProduct(producto) {
    const {id, name, descripcion, precio, img, codigo, stock, activo, categoria_id } = producto
    console.log(id)
    console.log(name)
    console.log(descripcion)
    console.log(precio)
    console.log(img)
    console.log(codigo)
    console.log(stock)
    console.log(activo)
    console.log(categoria_id)
    const query =`UPDATE ${this.table} SET name = ?, descripcion = ?,  precio = ?, img = ?, codigo =?,  stock= ?, activo =?,  categoria_id = ? WHERE id = ?`
    const [result] = await this.connection.promise().query(query, [name, descripcion, precio, img, codigo, stock, activo, categoria_id, id])
    return result
 }

}