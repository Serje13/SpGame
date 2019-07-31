const keystone = require("keystone");
const Types = keystone.Field.Types;

// First we gonna create our User list
let User = new keystone.List("User");

// Then we gonna add the fields
User.add({
  name: { type: Types.Name, required: true },
  email: { type: Types.Email, initial: true, required: true },
  password: { type: Types.Password, initial: true }
  //  canAccessKeystone: { type: Boolean, initial: true }
});
// User.add({
//   displayName: { type: String },
//   password: { type: keystone.Field.Types.Password },
//   email: { type: keystone.Field.Types.Email, unique: true },
// });

User.schema.virtual("canAccessKeystone").get(() => {
  return true;
});

User.defaultColumns = "name, email";
User.register();
