const keystone = require("keystone");

// Set up our keystone instance
keystone.init({
  "wysiwyg images": true,
  // The name of the KeystoneJS application
  name: "spgame",
  // Paths to our application static files
  static: [
    "./server/styles/",
    "./server/public/images",
    "./server/public/fonts"
  ],
  // Keystone includes an updates framework,
  // which you can enable by setting the auto update option to true.
  // Updates provide an easy way to seed your database,
  // transition data when your models change,
  // or run transformation scripts against your database.
  "auto update": true,
  // The url for your MongoDB connection
  mongo: "mongodb://localhost/spgame",
  // Whether to enable built-in authentication for Keystone's Admin UI,
  auth: true,
  session: true,
  // The key of the Keystone List for users, required if auth is set to true
  "user model": "User",
  // The encryption key to use for your cookies.
  "cookie secret": "6D61822FBEAED8635A4A52241FEC3"
});

// Load your project's Models
keystone.import("./server/models");

// Add routes later
keystone.set("routes", require("./server/routes"));

// Start Keystone
keystone.start();
