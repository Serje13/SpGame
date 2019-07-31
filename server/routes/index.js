// const bodyParser = require("body-parser");
const keystone = require("keystone");
const Partner = keystone.list("Partner");
const Category = keystone.list("Category");
const cors = require("cors");
// Export our app routes
exports = module.exports = app => {
  // app.use((req, res, next) => {
  //   //doesn't send response just adjusts it
  //   res.header("Access-Control-Allow-Origin", "*"); //* to give access to any origin
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
  //   );
  //   if (req.method === "OPTIONS") {
  //     res.header(
  //       "Access-Control-Allow-Methods",
  //       "PUT, POST, PATCH, DELETE, GET"
  //     ); //to give access to all the methods provided
  //     return res.status(200).json({});
  //   }
  //   next(); //so that other routes can take over
  // });

  // app.use(bodyParser.json({ limit: "3mb" }));

  // // //Body-parser middleware
  // app.use(bodyParser.urlencoded({ limit: "3mb", extended: true }));
  // app.use(cors());

  // app.use((req, res, next) => {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   next();
  // });

  // Set up the default app route to  http://localhost:3000/index.html
  app.get("/", (req, res) => {
    // Render some simple boilerplate html
    renderFullPage = () => {
      // Note the div class name here, we will use that as a hook for our React code
      return `
		<!doctype html>
		<html lang="en">
  <head>
    <title>SPGame</title>
    <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" type="text/css" href="index.css" />

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    
    <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="416204a6-bbd5-4ac2-84d6-335ef1d37df3";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>
    

  </head>
  <body>
    <div id="root"></div>

    <script src="http://localhost:1234/bundle.js"></script>

  </body>
  </html>
		`;
    };
    // Send the html boilerplate
    res.send(renderFullPage());
  });

  app.get("/images", (req, res) => {
    res.send("This is the List of images!!!");
  });

  app.get("/partners", (req, res) => {
    Partner.model.find({}).exec((err, items) => {
      if (err) return res.send("database error", err);
      if (!items) return res.send("not found");

      res.send({
        items
      });
    });
    // res.send("This is the List of Partners!!!");
  });
  app.get("/categories", (req, res) => {
    Category.model.find({}).exec((err, items) => {
      if (err) return res.send("database error", err);
      if (!items) return res.send("not found");

      res.send({
        items
      });
    });
    // res.send("This is the List of Partners!!!");
  });
};
// exports = module.exports = app => {
//   app.get("/images", (req, res) => {
//     res.send("This is the List of images!!!");
//   });
// };
