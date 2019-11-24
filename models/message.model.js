const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = require("./user.model");

/*
  Partons du princicpe suivant
  Sur le tchat :
  des "rooms" contiennent des "messages"
  Donc 2 schemas roomSchema et messageSchema
*/
const messageSchema = schema({
 message_body: String,
 user: userSchema,
 created_at: { type: Date, default: Date.now },
});

const Message = mongoose.model("messages", messageSchema);

module.exports = Message;
module.exports = messageSchema;