const express = require("express");
const {port} = require("../Config/config");
const db = require("../Config/db");
const path = require("path");
const UserController = require("../Controllers/User");
const app = express();
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.set("views", path.join(__dirname, '../views'));
app.set("view engine", "jade")
// Rotes to get All Data

app.post("/api/createNewUser", UserController.handleUserSignIn);
app.listen(port, ()=>{
    console.log("Server is listening at port ", port)
})