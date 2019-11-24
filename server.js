const dotenv = require('dotenv').config();
// Imports
// express
const express = require("express");
const app = express();
// BDD Mongoose 
const mongoose = require("mongoose");
// Others
const multer = require("multer");
const path = require("path");

// Models 
const Project = require("./models/project.model");
const User = require("./models/user.model");
const Room = require("./models/chat.model");

// Middleware json
app.use(express.json());

// Configuration debug BDD mongo
mongoose.set("debug", true);

// Connexion à la BDD mongo
mongoose.connect(
 // 'mongodb+srv://VortexAgency:vortex@vortexagency-vihn0.mongodb.net/test?retryWrites=true&w=majority',
 `${process.env.DB_CONN}`,
 { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => console.log("connexion BDD Atlas ok !"));


/*
 * LES ROUTES
 *
 * C'est ici que l'on retrouvera le code principal de notre API
 * sur une route appelée par le client, nous exécutons une fonction qui retournera une response au client
 * 
 * Exemple ici ROUTE 1 : sur http://locacalhost:3000/projects : 
 * > le serveur node récupere les données sur Mongo
 * > et il renvoie les données en json au client
*/

app.get('/', async (req, res) => {
 res.send('Api NodeJs (Express/MongoDB) de Démarrage. De Fred & Adrien :) ');
});



/* ROUTE 1 : localhost:3000/projects
 * Rôle : retourner le json de la liste des projects
*/
app.get('/projects', async (req, res) => {
 // On fait la requete à la BDD mongo
 const projects = await Project.find({}).exec();
 // On renvoie la response en json au serveur
 res.json(projects);
});




/* ROUTE 2 : localhost:3000/chat/room/:roomid
 * param : name - le nom de la chatroom (pour le moment 'react' ou 'nodejs')
 * Rôle : retourner le json de la liste des messages d'une chatroom
*/
app.get('/chat/room/:name', async (req, res) => {
 // On récupère le parametre dans l'url avec req.params
 const room_name = req.params.name;
 // On fait la requete à la BDD mongo
 const room = await Room.findOne({ name: room_name }).exec();
 // On renvoie la response en json au serveur
 res.json(room);
});



// ROUTE 3
// app.get('/users', async (req, res) => {

// });

// etc.... et toutes les autres routes de l'API



/******************/
// Utiliser un port
// le serveur est alors accessible en local sur http://localhost:3000
app.listen(3000);