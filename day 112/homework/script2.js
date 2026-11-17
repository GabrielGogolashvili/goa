let books = [
    { title: "Harry Potter", price: 35, pages: 320 },
    { title: "The Hobbit", price: 28, pages: 280 },
    { title: "Atomic Habits", price: 45, pages: 250 },
    { title: "The Alchemist", price: 20, pages: 190 },
    { title: "Clean Code", price: 55, pages: 450 }
]

books.forEach(book => console.log(book.title))

let cheapBooks = books.filter(book => book.price < 30).map(book => book.title)
console.log(cheapBooks)

let booksOver300 = books.filter(book => book.pages > 300).map(book => book.title)
console.log(booksOver300)

let expensiveBooks = books.filter(book => book.price > 40).length
console.log(expensiveBooks)

let totalPrice = books.reduce((sum, book) => sum + book.price, 0)
console.log(totalPrice)

let longBooks = []

books.forEach(book => {
    if (book.pages > 300) {
        longBooks.push(book)
    }
})

console.log(longBooks)