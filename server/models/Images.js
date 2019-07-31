const keystone = require("keystone");
const Types = keystone.Field.Types;
const path = require("path");

// Create a new Keystone list called Recipe
const Images = new keystone.List("Images", {
  // autokey: { path: "slug", from: "name", unique: true },
  map: { name: "name" },
  defaultSort: "-createdAt"
});

// Adding the option to add an image to our Recipe from
const ImgStorage = new keystone.Storage({
  adapter: keystone.Storage.Adapters.FS,
  fs: {
    // required; path where the files should be stored
    path: keystone.expandPath("./server/public/uploads"),
    generateFilename: function(file, index) {
      console.log(file);
      return file.originalname;
    },
    whenExists: "overwrite",
    // path where files will be served
    publicPath: "server/public/uploads"
  }
});

Images.add({
  name: { type: String },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // publishedAt: Date,
  image: {
    type: Types.File,
    storage: ImgStorage,
    mimetype: ".jpeg, .jpg, .gif, .svg, .png"
  }
});

// Setting the default order of the columns on the admin tab
Images.defaultColumns = "name, image";
Images.register();
