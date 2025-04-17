import { Sequelize } from "sequelize";
import "dotenv/config";

// Configuración de la base de datos
let dbName = process.env.DB_NAME || "my_database";
let userName = process.env.DB_USER || "root";
let password = process.env.DB_PASSWORD || "root";
let host = process.env.DB_HOST || "localhost";
let port = process.env.DB_PORT || 3306;
let dialect = process.env.DB_DIALECT || "mysql";

// Crear una nueva instancia de Sequelize
const SEQUELIZE = new Sequelize(dbName, userName, password, {
    host: host,
    dialect: dialect,
    port: port,
});

// Probar la conexión a la base de datos
SEQUELIZE.authenticate()
    .then(() => {
        console.log('La conexion a la base de datos se ha establecido correctamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos: ', err);
    });

export default SEQUELIZE;
