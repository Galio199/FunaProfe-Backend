import app from "./config/server.js";
import SEQUELIZE from "./database/connect.js";
import "dotenv/config";

let port = process.env.PORT || 3000;

//Sincronizar los modelos con la base de datos
SEQUELIZE.sync({ force: false})
    .then(() => {
        console.log("Base de datos sincronizada correctamente");

        //Iniciar el servidor
        app.listen(port, () => {
            console.log("Servidor corriendo ok");
        });
    })
    .catch((error) => {
        console.error("Error al sincronizar la base de datos:", error);
    });