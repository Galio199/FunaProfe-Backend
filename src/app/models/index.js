import CommentRating from './CommentRating.js';
import ProfessorRating from './ProfessorRating.js';
import Comment from './Comment.js';
import Subject from './Subject.js';
import SubjectProfessor from './SubjectProfessor.js';
import Professor from './Professor.js';
import User from './User.js';

//Definir las relaciones entre usuario y comentario | M:M | calificacion_comentario
User.belongsToMany(Comment, { through: CommentRating, foreignKey: 'userId'});
Comment.belongsToMany(User, { through: CommentRating, foreignKey: 'commentId' });

// Relaciones directas desde CommentRating hacia Comment y User
CommentRating.belongsTo(Comment, { as: 'comment', foreignKey: 'commentId' });
CommentRating.belongsTo(User, { as: 'user', foreignKey: 'userId' });

//Definir las relaciones entre profesor y usuario | M:M | calificacion_profesor
User.belongsToMany(Professor, { through: ProfessorRating, foreignKey: 'userId'});
Professor.belongsToMany(User, { through: ProfessorRating, foreignKey: 'professorId' });

// Relaciones directas desde ProfessorRating hacia Professor y User
ProfessorRating.belongsTo(Professor, { as: 'professor', foreignKey: 'professorId' });
ProfessorRating.belongsTo(User, { as: 'user', foreignKey: 'userId' });

//Definir las relaciones entre usuario y comentario | 1:M
User.hasMany(Comment, { foreignKey: 'userId'});
Comment.belongsTo(User, { foreignKey: 'userId'});

//Definir las relaciones entre profesor y comentario | 1:M
Professor.hasMany(Comment, { foreignKey: 'professorId' });
Comment.belongsTo(Professor, { foreignKey: 'professorId' });

//Definir las relaciones entre materia y profesor | M:M | materia_profesor
Subject.belongsToMany(Professor, { through: SubjectProfessor, foreignKey: 'subjectId' });
Professor.belongsToMany(Subject, { through: SubjectProfessor, foreignKey: 'professorId' });

// Relaciones directas desde SubjectProfessor hacia Subject y Professor
SubjectProfessor.belongsTo(Subject, { as: 'subject', foreignKey: 'subjectId' });
SubjectProfessor.belongsTo(Professor, { as: 'professor', foreignKey: 'professorId' });

//Exportar los modelos configurados
export { CommentRating, ProfessorRating, Comment, Subject, SubjectProfessor, Professor, User };