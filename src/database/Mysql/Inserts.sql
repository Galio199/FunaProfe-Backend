-- Insertar usuario
INSERT INTO funaprofe.usuario (id, correo, contrasennia) VALUES
  (1, 'juan', '1234');

-- Insertar materias
INSERT INTO funaprofe.materia (id, nombre) VALUES
  (22951, 'Programacion Orientada a Objetos'),
  (22954, 'Matematicas Discretas'),
  (22955, 'Estructuras de datos y Analisis de Algoritmos'),
  (22957, 'Electricidad y Electronica'),
  (22958, 'Automatas'),
  (22959, 'Bases de Datos I'),
  (22960, 'Bases de Datos II'),
  (22961, 'Sistemas Digitales'),
  (22965, 'Redes de Computadores'),
  (22967, 'Programacion en la Web');

-- Insertar profesores
INSERT INTO funaprofe.profesor (id, nombre, ruta_foto, calificacion, numeroCal, sumaCal) VALUES
  (1, 'Jose Geralbert Rubiano', '1', 0.0, 0, 0),
  (2, 'Jathinson Meneses', 'mona', 0.0, 0, 0),
  (3, 'Dario Alejandro Riaño', '3', 0.0, 0, 0),
  (4, 'Henry Andres Jimenez', '4', 0.0, 0, 0),
  (5, 'Fernando Antonio Rojas', 'mona2', 0.0, 0, 0),
  (6, 'Jonnathan Alfredo Ramos Chaux', 'mona2', 3.0, 1, 3),
  (7, 'Gilberto Javier Diaz Toro', '7', 0.0, 0, 0),
  (8, 'Hector Niño Quiñonez', 'mona2', 0.0, 0, 0),
  (9, 'Luis Carlos Guayacan Chaparro', 'mona', 5.0, 1, 5);

-- Insertar relaciones materia-profesor
INSERT INTO funaprofe.materia_profesor (id_materia, id_profesor) VALUES
  (22951, 3),
  (22951, 5),
  (22954, 6),
  (22955, 8),
  (22957, 1),
  (22958, 6),
  (22958, 9),
  (22959, 2),
  (22960, 4),
  (22961, 1),
  (22965, 7),
  (22967, 2),
  (22967, 3),
  (22967, 4);

-- Insertar comentario (usamos id_usuario = 1 directamente)
INSERT INTO funaprofe.comentario (id, id_profesor, id_usuario, contenido, likes) VALUES
  (1, 9, 1, 'La primera clase lo confundi con un estudiante', 1);

-- Insertar un like a un comentario
INSERT INTO funaprofe.calificacion_comentario (id_comentario, id_usuario) VALUES
  (1, 1);

-- Calificaciones a profesores
INSERT INTO funaprofe.calificacion_profesor (id_profesor, id_usuario, calificacion) VALUES
  (6, 1, 3),
  (9, 1, 5);
