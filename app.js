// here I'll configure express app
// test comment for push
const express = require("express");
const cors = require("cors");
const transactionsController = require("./controllers/transactionController")

const app = express();
app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome to Budget App! For Docs, please visit...")
})

app.use("/transactions", transactionsController)

app.get("*", (req, res) => {
    res.status(404);
    res.json({ "error": "Page Not Found" })
});

module.exports = app;