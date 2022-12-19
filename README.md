# Tom's BOOKS API
This API is for storing data about books in a database.

## Data schema
```
{
    title: String
    description: String
    year: Number
    quantity: Number
    imageURL: String
}
```
The `title` and `description` are pretty obvious.  The `year` is the year of publication. The `quantity` is how many you currently have on hand. The `imageURL` is the URL for the book cover.

## [GET] `http://localhost:PORT/books`

[Note: replace PORT as appropriate for your own setup]

This will get you a complete list of all of the books in your database.

### Response
The response will be an array in JSON form of all books in the database.

## [GET] `http://localhost:PORT/books/:id`

This will get a book with the specified ID.

### Response
The response will be the requested book in JSON form.

## [POST] `http://localhost:PORT/books/`

This will add a book from a Form to the database.

### Response
If successful, you will get a 200 code in the header.  If not, you will get a 400 along with the error message.

## [PUT] `http://localhost:PORT/books/:id`

This will update the book specified by the id.

### Response
If successful, you will get a 200 code in the header.  If not, you will get a 400 code along with the error message.

## [DELETE] `http://localhost:PORT/books/:id`

This will delete the book specified by the id.

### Response
If successful, you will get a 200 code.  If not, you will get a 400 code.