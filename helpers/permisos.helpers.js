import Permiso from '../models/Permiso.js'

export default class PermisosHelpers {

    createPermiso(newData) {
        const { id, name } = newData
        const permiso = new Permiso(parseInt(id), name )
        return permiso
    }
}