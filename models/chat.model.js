const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = require("./user.model");
const messageSchema = require("./message.model");

/*
  Partons du princicpe suivant
  Sur le tchat :
  des "rooms" contiennent des "messages"
  Donc 2 schemas roomSchema et messageSchema
*/
const roomSchema = schema({
 name: { type: String, lowercase: true, unique: true },
 topic: String,
 users: [userSchema],
 messages: [messageSchema],
 created_at: Date,
 updated_at: { type: Date, default: Date.now },
});


const Room = mongoose.model("rooms", roomSchema);
module.exports = Room;
