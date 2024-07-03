import { Router } from 'express';
import UsuariosControllers from '../controllers/usuarios.controllers.js';

const router = Router();
const usuariosControllers = new UsuariosControllers();

router.get('/users', usuariosControllers.getUsers);
router.get('/users/:id', usuariosControllers.getUserById);
router.post('/users', usuariosControllers.addUser);
router.put('/users/:id', usuariosControllers.modifyUser);
router.delete('/users/:id', usuariosControllers.deleteUser);

export default router;