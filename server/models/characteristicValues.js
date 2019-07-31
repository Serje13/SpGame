const keystone = require("keystone");
const Types = keystone.Field.Types;
// const path = require("path");

let CharacterisricValue = new keystone.List("CharacterisricValue", {
  map: { name: "title" },
  autokey: { path: "characterisricValues", from: "title" }
  // drilldown: "Category"
});

CharacterisricValue.add({
  title: { type: String, initial: true, index: true, unique: true },
  createdAt: { type: Types.Date },
  updatedAt: { type: Types.Date }
});
CharacterisricValue.relationship({
  path: "categories",
  ref: "Category",
  refPath: "characterisricValue"
});
CharacterisricValue.defaultColumns = "title";
CharacterisricValue.register();
