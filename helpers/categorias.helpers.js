import Categoria from '../models/Categoria.js'

export default class CategoriasHelpers {

    createCategoria(newData) {
        const { id, name } = newData
        const categoria = new Categoria(parseInt(id), name )
        return categoria
    }
}