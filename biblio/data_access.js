let books = {}; //In-memory database
books[100] = {"isbn":"100", "title":"Jaws", "price": 14.95}

module.exports.findBook = function(isbn) {
    return books[isbn];
};

module.exports.updateBook = function(isbn, book) {
    books[isbn] = book;
};