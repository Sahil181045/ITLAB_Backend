const express = require("express");
const comments = require("./routes/comments");
const InitiateMongoServer = require("./config/db2");

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = 9000;

// Middleware
app.use(express.json());

/**
 * Router Middleware
 * Router - /comments/*
 * Method - *
 */
app.use("/comments", comments);

app.listen(PORT, (req, res) => {
    console.log(`Server Started at PORT ${PORT}`);
});