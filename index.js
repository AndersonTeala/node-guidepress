const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");

const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/ArticlesController");

const Article = require("./articles/Article");
const Category = require("./categories/Category");

/* View engine */
app.set('view engine', 'ejs');

/* Static */
app.use(express.static('public'));

/* Body parser */
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

/* Database */

connection
    .authenticate()
    .then(() => {
      console.log("✅ Connected to the 🦾 database!");
    }).catch((error) => {
      console.log(error);
    })


app.use("/", categoriesController);
app.use("/", articlesController);



/* Docker */
const PORT = 3000;
const HOST = '0.0.0.0';


app.get("/", (req,res) => {
  res.render("index");
})


app.listen(PORT,HOST,() => {
  console.log("🚀 Back-end started!")
})