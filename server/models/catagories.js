const keystone = require("keystone");
const Types = keystone.Field.Types;
// const path = require("path");

let Category = new keystone.List("Category", {
  drilldown: "CharacterisricValue"
});

Category.add({
  title: { type: String, index: true, unique: true },
  image: { type: String },
  property1: { type: String },
  property2: { type: String },
  characterisricValue: {
    type: Types.Relationship,
    ref: "CharacterisricValue",
    many: true,
    index: true,
    unique: true
  },
  createdAt: { type: Types.Date },
  updatedAt: { type: Types.Date }
});

Category.defaultColumns = "title, characterisricValue";
Category.register();
