import User from '../models/User.js'

export default class UsersHelpers {

    createUser(newData) {
        const { id, name, email, contrasena } = newData
        const user = new User(parseInt(id), name, email, contrasena)
        return user
    }
}