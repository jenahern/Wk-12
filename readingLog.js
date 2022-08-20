// Array to hold data input object
const readLog = [
  {
    id: 1,
    title: "The Enormous Egg",
    author: "Oliver Butterworth",
    date: "2022-08-20",
  },
];

const $bookCard = $("#book-container");

$(() => {
  renderReadLog();
});

function renderReadLog() {
  $bookCard.empty();
  $bookCard.append(readLog.map((book) => insertNewBook(book)));
}

// add new book to card
function insertNewBook(book) {
  return $("<div/>")
    .addClass("col-4")
    .append(
      $("<div/>")
        .addClass("card mb-2")
        .append(
          $("<div/>")
            .addClass("card-body mx-2")
            .append(
              $("<h4/>")
                .addClass("card-header mb-2")
                .text("Book Number: " + book.id),
              
              $("<p/>")
                .addClass("title")
                .text("Book Title: " + book.title),
              $("<p/>")
                .addClass("author")
                .text("Author: " + book.author),
              $("<p/>")
                .addClass("date")
                .text("Date Completed: " + book.date),
              $("<button/>")
                .addClass("btnMain")
                .text("Edit")
                .on("click", () => onEdit(book.id)),
              $("<button/>")
                .addClass("btnMain ms-3")
                .text("Delete")
                .on("click", () => onDelete(book.id))
            )
        )
    );
}

// Button Functions and Listening

let $bookTitle = $("#bookTitle");
let $author = $("#author");
let $date = $("#selectDate");

const logModal = new bootstrap.Modal("#logModal");
const logModalTitle = $("#log-modal-title");
const addFormBtn = $("#btnAdd");
const btnSave = $("#btnSave");
editBookId = null;

// open the add book form modal
function startAddBook() {
  logModal.show();
  // clear form
  $bookTitle.val("");
  $author.val("");
  $date.val("");

  logModalTitle.text("Add New Book");
  addFormBtn.show();
  btnSave.hide();
}

// add new book from btn
function addBookBtnClick() {
  logModal.hide();
  logModalTitle.text("Add New Book");

  // create/add new book data to array
  readLog.push({
    id: readLog[readLog.length - 1].id + 1, // hack from Natalie
    title: $bookTitle.val(),
    author: $author.val(),
    readDate: $date.val(),
  });
  renderReadLog();
}

function onDelete(bookId) {
  const indexToDelete = readLog.findIndex((book) => book.id === bookId);
  readLog.splice(indexToDelete, 1);
  renderReadLog();
}

function onEdit(bookId) {
  // find book id
  const book = readLog.find((book) => book.id === bookId);
  logModal.show();
  logModalTitle.text("Edit " + book.title);

  // update edits book info
  $bookTitle.val(book.title);
  $author.val(book.author);
  $date.val(book.date);
  // indentify which book to update
  editBookId = book.id;

  // hide add/show btns
  addFormBtn.hide();
  btnSave.show();
}

function onSaveEdit() {
  const book = readLog.find((book) => book.id === editBookId);
  book.title = $bookTitle.val();
  book.author = $author.val();
  book.date = $date.val();

  renderReadLog();
  logModal.hide();
}
