const express = require('express');
const dao = require("./data_access");

const app = express();
app.use(express.json()); //Parse JSON body

app.get("/books/:isbn", function(req, res) {
    let book = dao.findBook(req.params.isbn);

    if (book === undefined) {
        res.statusCode = 404;
        res.end();
    } else {
        res.send(book);
    }
});

app.put("/books/:isbn", function(req, res) {
    if (req.params.isbn === undefined || req.body === undefined) {
        res.statusCode = 500;
        res.end();
        return;
    }
    dao.updateBook(req.params.isbn, req.body);
    res.end();
});

const port = 3000;
console.log("server starting on port: " + port);
app.listen(port)