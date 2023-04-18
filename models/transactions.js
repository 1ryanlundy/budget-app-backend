let transactionCounter = 1;

module.exports = [
    {
        id: transactionCounter++,
        name: "Income",
        date: "04/01",
        amount: 1000,
        isExpense: false

    },
    {
        id: transactionCounter++,
        name: "Taxes",
        date: "04/01",
        amount: 300,
        isExpense: true,

    }
];