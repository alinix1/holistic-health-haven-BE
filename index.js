const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");

const app = express();
const port = process.env.PORT || 9000;

app.locals.title = "Holistic Health Haven API";
app.set("port", port);

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// centralized routes
app.use("/api/v1", routes);

// start the server
app.listen(app.get("port"), () => {
  console.log(`${app.locals.title} is now running on ${app.get("port")}!`);
});
