const keystone = require("keystone");
// let User = keystone.list("User");

// exports = module.exports = done => {
//   new User.model({
//     name: "user1",
//     email: "admin@keystonejs.com",
//     password: "admin",
//     canAccessKeystone: true
//   }).save(done);
// };

exports.create = {
  User: [
    {
      displayName: "user1",
      email: "admin@keystonejs.com",
      password: "admin"
    }
  ]
};
