// Les imports
const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = require("./user.model");

// On crée un shema de notre objet project
const projectSchema = schema({
 name: String,
 client: String,
 users: [userSchema],
});

/*
  On lie notre model à la base de donnée MongoDB 
  de cette façon nous pouvons executer toutes les requetes à la BDD depuis notre serveur
   exemple : Project.find({}), new Project(....).save()
*/
const Project = mongoose.model("projects", projectSchema);
// On export l'objet Project et on pourra l'importer dans le fichier server.js
module.exports = Project;