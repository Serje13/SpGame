const keystone = require("keystone");
const Types = keystone.Field.Types;
const path = require("path");

// Create a new Keystone list called Recipe
let Partner = new keystone.List("Partner");

// Then we gonna add the fields
Partner.add({
  title: { type: Types.Text },
  image: { type: Types.Text },
  createdAt: { type: Types.Date },
  updatedAt: { type: Types.Date }
  //  canAccessKeystone: { type: Boolean, initial: true }
});
// User.add({
//   displayName: { type: String },
//   password: { type: keystone.Field.Types.Password },
//   email: { type: keystone.Field.Types.Email, unique: true },
// });

// User.schema.virtual("canAccessKeystone").get(() => {
//   return true;
// });

Partner.defaultColumns = "title, image";
Partner.register();
