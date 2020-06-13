const express = require('express');
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();


// Import routes
const UserRoutes = require("./routes/UserRoutes");

//loads environment variables from a .env file into process
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());


// Connect DB
mongoose.connect(
    process.env.DB_CONTEXT,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to the mongodb");
    }
  );


  // Config routes
app.use("/api/users", UserRoutes);


// Start server
app.listen(8080, () => {
    console.log("Server is up and running on server on ");
  });
  