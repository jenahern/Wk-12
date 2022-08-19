// JS Functions Needed
//     submit form
//     reset form
//     read form data
//     insert new data
//     edit submission
//     delete submission

let sName = $("#sName");
let bookTitle = $("#bookTitle");
let author = $("#author");
let date = $("#selectDate");
let form = document.getElementById("addBook");
// const form = $("#addBook");
const modal = $("#logModal");
const bookCard = $("#book-container");

const readLog = [];

$(() => {
  renderReadLog();
});

function renderReadLog() {
  form.reset();
  bookCard.append(readLog.map((book) => insertNewBook(book)));
  readLog.push([sName, bookTitle, author, date]);
  
  
}

// add new book to card
function insertNewBook(book) {
  return $("<div/>").addClass("card mb-2").append(
      $("<div/>").addClass("card-body mx-2").append(
        $("<h3/>").addClass("card-title").text(bookTitle),
        $("<p/>").addClass("name").text(sName),
        $("<p/>").addClass("book").text(bookTitle),
        $("<p/>").addClass("author").text(author),
        $("<p/>").addClass("date").text(date),
        $("<button/>").addClass("btnMain").text("Edit"),
        $("<button/>").addClass("btnMain").text("Delete"),
        )
        ) 
            
   }

// console.log(readLog);
// add into HTML onclick="addBookBtnClick()"
function addBookBtnClick() {
  renderReadLog();
  console.log(readLog);
  

}

// function onDelete() {
//   const indexToDelete = readLog.findIndex((book) => book.id === bookId);
//   readLog.splice(indexToDelete, 1);
//   renderReadLog();
// }

// // function onEdit(){

// // insertNewBook();
