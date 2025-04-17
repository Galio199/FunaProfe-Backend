create table profesor(
	id int auto_increment,
	nombre varchar(100) not null,
	calificacion float default 0,
	numeroCal int default 0,
	sumaCal int default 0,
	ruta_foto varchar(500) default "",
	constraint pk_profesor primary key (id)
);

create table materia(
	id int not null,
	nombre varchar(100) not null,
	constraint pk_materia primary key (id)
);

create table materia_profesor(
	id_materia int not null,
	id_profesor int not null,
	constraint pk_materiaProfe primary key(id_materia,id_profesor),
	constraint fk_materiaProfe_profe foreign key (id_profesor) references profesor(id) on delete cascade,
	constraint fk_materiaProfe_materia foreign key (id_materia) references materia(id) on delete cascade
);

Create table usuario (
  id int auto_increment,
  correo varchar(100) Not Null,
  contrasennia varchar(100) Not Null,
  verificado boolean default false,
  activo boolean default true,		
  constraint pk_usuario Primary key (id),
  constraint uq_usuario_correo unique (correo)
);

create table calificacion_profesor (
	id_profesor int not null,
	id_usuario int not null,
	calificacion int default null,
	constraint pk_califiProfesor primary key (id_profesor,id_usuario),
	constraint fk_profesor_califiProfesor foreign key (id_profesor) references profesor(id) on delete cascade,
	constraint fk_usuario_califiProfesor foreign key (id_usuario) references usuario(id) on delete cascade
);

create table comentario (
	id int auto_increment,
	id_profesor int not null,
	id_usuario int not null,
	contenido varchar(700) not null,
	likes int default 0,
	constraint pk_comentario primary key (id),
	constraint fk_profesor_comentario foreign key (id_profesor) references profesor(id) on delete cascade,
	constraint fk_usuario_comentario foreign key (id_usuario) references usuario(id) on delete cascade,
	constraint uq_comentario unique (id_profesor,id_usuario)
);

create table calificacion_comentario (
	id_comentario int not null,
	id_usuario int not null,
	constraint pk_califiComentario primary key (id_comentario,id_usuario),
	constraint fk_usuario_califiComentario foreign key (id_usuario) references usuario(id) on delete cascade,
	constraint fk_comentario_califiComentario foreign key (id_comentario) references comentario(id) on delete cascade
);