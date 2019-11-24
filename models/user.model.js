const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userSchema = schema({
 first: String,
 last: String,
 email: { type: String, lowercase: true, unique: true },
 password: String,
 is_active: { type: Boolean, default: false },
});

const User = mongoose.model("users", userSchema);
// On export l'objet User et on pourra l'importer dans le fichier server.js ou ailleurs
module.exports = User;
module.exports = userSchema;


