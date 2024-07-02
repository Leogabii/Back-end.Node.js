import UsuariosHelpers from '../helpers/users.helpers.js';
import UsersDaoMysql from '../daos/users.dao.mysql.js';

export default class UsuariosControllers {
    
    constructor() {
        this.db = new UsersDaoMysql();
        this.helpers = new UsuariosHelpers();
    }

    getUsers = async (req, res) => {
            const users = await this.db.getAllUsers();
            res.json(users);
    }

    getUserById = async (req, res) => {
            const { id } = req.params;
            const users = await this.db.getUserById(id);
            res.json(users);
    }

    addUser = async (req, res) => {
            const users = this.helpers.createUsuario(req.body);
            const result = await this.db.addUser(users);
            res.json(result)
    }

    modifyUser = async (req, res) => {
            const users = this.helpers.createUsuario(req.body);
            const result = await this.db.modifyUser(users);
            res.json(result);
    }

    deleteUser = async (req, res) => {
        try {
            const { id } = req.params;
            const result = await this.db.deleteUser(id);
            res.json(result)
        } catch (err) {
            res.status(500).json({ error: 'Error al eliminar el usuario' });
        }
    }
}
