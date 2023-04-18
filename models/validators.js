const transactionValidator = (req, res, next) => {
    if (req.body.hasOwnProperty("name") && req.body.hasOwnProperty("amount")) {
        next();
    } else if (!req.body.url || !req.body.name) {
        return res
            .status(400)
            .json({ "error": "Transaction must contain a name and an amount" })
    }
}

module.exports = { transactionValidator };