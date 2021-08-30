// BOOKS ARRAY//////////////////////////

const booksArr = [
    {
        title: 'Willy Wonka',
        author: 'John Doe',
        isbn: '8849582'
    },
    {
        title: 'Dune',
        author: 'Micheal Phelps',
        isbn: '8844442'
    },
    {
        title: 'Inglorious',
        author: 'Aldo Raine',
        isbn: '11120982'
    },
];

// VARIABLES //////////////////////////

const form = document.querySelector('#book-form');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const isbnInput = document.querySelector('#isbn');
const bookList = document.querySelector('#book-list');

// BOOK CLASS //////////////////////////

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
};

// UI CLASS FOR HANDLING UI TASKS //////////////////////////

class UI {
    static displayBooks() {
        booksArr.forEach((book) => {
            UI.addBookToList(book);
        })
    }
    static addBookToList(book) {
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${ book.title }</td>
            <td>${ book.author }</td>
            <td>${ book.isbn }</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        bookList.appendChild(row);
    }
    static clearFields() {
        titleInput.value = '';
        authorInput.value = '';
        isbnInput.value = '';
    }
};

// EVENTS //////////////////////////

// load array data upon page load
document.addEventListener('DOMContentLoaded', () => {
    UI.displayBooks();
});

// input events

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
    if (title === '' || author === '' || isbn === '') {
        return alert('Please enter all fields')
    } else if (isNaN(isbn)) {
        return alert('Enter a valid ISBN number')
    }
    // create new book with input values
    const book = new Book(title, author, isbn);

    UI.addBookToList(book);
    UI.clearFields();

});

// REMOVE BOOK FROM LIST

bookList.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
        alert('Book removed');
    }
});









