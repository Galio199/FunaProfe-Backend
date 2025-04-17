import { User } from '../models/index.js';
import { UserDTO } from '../DTO/UserDTO.js';

class UserRepository {

    /**  Guardar un usuario
     * @param {object} user -El objeto con los datos del usuario a crear
     * @returns {Promise<boolean>} -True si se creó el usuario, false si no se creó
    */
    async createUser(user) {
        try {
            const newUser = await User.create(user);
            return !!newUser;
        } catch (error) {
            throw new Error('Error al crear el usuario: ' + error.message);
        }
    }

    /** Eliminar un usuario por el correo (id)
     * @param {string} email -El correo (id) del usuario a eliminar
     * @returns {Promise<boolean>} -true si se eliminó el usuario, false si no se encontró
    */
    async deleteUser(email) {
        try {
            const deleted = await User.destroy({ where: { email } });
            return deleted > 0;
        } catch (error) {
            throw new Error('Error al eliminar el usuario: ' + error.message);
        }
    }

    /** Actualizar un usuario
     * @param {string} email -El correo (id) del usuario a actualizar
     * @param {object} user -El objeto con los datos del usuario a actualizar
     * @returns {Promise<boolean>} -true si se actualizó el usuario, false si no se encontró
    */
    async updateUser(email, user) {
        try {
            const [updated] = await User.update(user, { where: { email } });
            return updated > 0;
        } catch (error) {
            throw new Error('Error al actualizar el usuario: ' + error.message);
        }
    }

    /** Obtener un usuario por el correo (id)
     * @param {string} email -El correo (id) del usuario a obtener
     * @returns {Promise<UserDTO>} -El usuario encontrado o null si no se encontró
    */
    async getUser(email) {
        try {
            const user = await User.findOne({
                where: { email },
                attributes: { exclude: ['password'] } // Excluir la contraseña del resultado
            });
            return new UserDTO(user.toJSON());
        } catch (error) {
            throw new Error('Error al obtener el usuario: ' + error.message);
        }
    }

    /** Validar un usuario por el correo (id) y la contraseña
     * @param {string} email -El correo (id) del usuario a validar
     * @param {string} password -La contraseña del usuario a validar
     * @returns {Promise<UserDTO>} -El usuario encontrado o null si no se encontró
    */
    async validateUser(email, password) {
        try {
            const user = await User.findOne({
                where: { email, password },
                attributes: { exclude: ['password'] } // Excluir la contraseña del resultado
            });
            return new UserDTO(user.toJSON());
        } catch (error) {
            throw new Error('Error al validar el usuario: ' + error.message);
        }
    }
}

export default new UserRepository();
