import UsuarioPermiso from '../models/UsuarioPermiso.js'

export default class UsuarioPermisosHelpers {

    createUsuarioPermiso(newData) {
        const { usuario_id, permiso_id } = newData
        const usuarioPermiso = new User(parseInt(usuario_id), parseInt(permiso_id))
        return usuarioPermiso
    }
}