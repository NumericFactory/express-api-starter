const mongoose = require("mongoose");
const Project = require("./models/project.model");
// const User = require("./models/user.model");
// const Message = require("./models/message.model");
const Room = require("./models/chat.model");


mongoose.connect(
 'mongodb+srv://VortexAgency:vortex@vortexagency-vihn0.mongodb.net/test?retryWrites=true&w=majority',
 { useUnifiedTopology: true, useNewUrlParser: true }
).then(() => Promise.all(
 // On ajout des rooms du Tchat (chaque <Room> contient une liste de <Messages>)
 [
  new Room({
   name: 'react',
   topic: 'Ici on parle de react',
   users: [
    { first: 'Fred', last: 'Lo', email: 'fred@laposte.net', password: '123', is_active: true },
    { first: 'Adrien', last: 'Se', email: 'adrien@hotmail.fr', password: '1234', is_active: false },
    { first: 'Caro', last: 'Line', email: 'caro@hotmail.fr', password: '12345', is_active: true },
   ],
   messages: [
    {
     message_body: "Salut comment ça va ? ",
     user: { first: "Fred", last: "Lo", email: "flo@laposte.net" },
     date: new Date()
    },

    {
     message_body: "Ca va bien et toi ? ",
     user: { first: "Adrien", last: "Se", email: "asergent@hotmail.fr" },
     date: new Date()
    },

    {
     message_body: "Cool !",
     user: { first: "Fred", last: "Lo", email: "flo@laposte.net" },
     date: new Date()
    }
   ],
   created_at: new Date(),
  }).save(),

  new Room({
   name: 'nodejs',
   topic: 'Ici on parle de NodeJS',
   users: [
    { first: 'Fred', last: 'Lo', email: 'fred@laposte.net', password: '123', is_active: true },
    { first: 'Adrien', last: 'Se', email: 'adrien@hotmail.fr', password: '1234', is_active: false },
    { first: 'Caro', last: 'Line', email: 'caro@hotmail.fr', password: '12345', is_active: true },
   ],
   messages: [
    {
     message_body: "Tu kiff NodeJS ?",
     user: { first: "Fred", last: "Lo", email: "flo@laposte.net" },
     date: new Date()
    },

    {
     message_body: "Yes j'adore",
     user: { first: "Adrien", last: "Se", email: "asergent@hotmail.fr" },
     date: new Date()
    },

    {
     message_body: "Ok ",
     user: { first: "Fred", last: "Lo", email: "flo@laposte.net" },
     date: new Date()
    },

    {
     message_body: "Hello les gars!",
     user: { first: 'Caro', last: 'Line', email: 'caro@hotmail.fr' },
     date: new Date()
    }

   ],
   created_at: new Date(),
  }).save()

 ]).then(res => {
  console.log("data ajouté");
  mongoose.connection.close();
 })

);
