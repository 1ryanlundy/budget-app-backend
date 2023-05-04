const express = require("express");
const transactions = express.Router();
const transactionsArray = require("../models/transactions")
const { transactionValidator } = require("../models/validators")


// index: all transactions
transactions.get("/", (req, res) => {
    res.json(transactionsArray);
})

// show: get one transaction
transactions.get("/:index", (req, res) => {
    const { index } = req.params
    console.log("GET /transactions/:index", index);

    if (transactionsArray[index]) {
        res.json(transactionsArray[index]);
    } else {
        res.status(404).json({ "error": "Transaction Not Found" })
    }
});

// create: add a transaction
transactions.post("/", transactionValidator, (req, res) => {
    console.log("POST /transactions", req.body);

    transactionsArray.push(req.body);
    res.status(201).json(transactionsArray[transactionsArray.length - 1]);
})



// update: update transaction
transactions.put("/:index", transactionValidator, (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
        transactionsArray[index] = req.body;
        res.status(200).json(transactionsArray[index]);
    } else {
        res.status(404).json({ "error": "Page Not Found" })
    }
});

// delete: delete transaction
transactions.delete("/:index", (req, res) => {
    const { index } = req.params;
    if (transactionsArray[index]) {
        const deletedTransaction = transactionsArray.splice(index, 1)
        res.status(200).json(transactionsArray);
    } else {
        res.status(404).json({ "error": "Page Not Found" })
    }
})

module.exports = transactions;