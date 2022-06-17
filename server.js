

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const xmlparser = require("express-xml-bodyparser");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// app config
app.set('view engine','ejs')

//middleware
app.use(cors());
app.use(express.json());
app.use(xmlparser());
app.use('/public',express.static('public'))

//connecting mongodb atlas database
const uri = "mongodb://localhost:27017/library";
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected!");
});

//adding routes to the server
const bookRouter = require("./routes/books"); //adding router files

const b = require('./sampleBooks.json')
app.get('/',(req,res)=>{
  res.render('home',{books:b})
})
app.use("/books", bookRouter);

// listen to the port to start server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
}); 
