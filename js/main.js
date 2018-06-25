document.addEventListener("DOMContentLoaded", () =>{

  const model = {
    books: [{
      name: "Anna Karenina",
      author: "Leo Tolstoy",
      image: "http://ecx.images-amazon.com/images/I/51vPf2CfSEL._SL160_.jpg",
      year: 1877, 
      read: false
    },
    {
      name: "Madame Bovary",
      author: "Gustave Flaubert",
      image: "http://ecx.images-amazon.com/images/I/51o5dnjk07L._SL160_.jpg",
      year: 1856,
      read: false
    },
    {
      name: "War and Peace",
      author: "Leo Tolstoy",
      image: "https://images-na.ssl-images-amazon.com/images/I/51Fpt-rqfbL._SL160_.jpg",
      year: 1869,
      read: false
    },
    {
      name: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      image: "https://images-na.ssl-images-amazon.com/images/I/5154xUzeb-L._SL160_.jpg",
      year: 1925,
      read: false
    },
    {
      name: "Lolita",
      author: "Vladimir Nabokov",
      image: "https://images-na.ssl-images-amazon.com/images/I/41s2G6WxLvL._SL160_.jpg",
      year: 1955,
      read: false
    },
    ], 

    getBooks: () => {
      return model.books
    },

    createBook: (obj) => {
      model.books.push(obj)
    },

    markAsRead: (index) => {
      model.books[index].read = true
    }

  }

  const octopus = {
    init: () => {
      view.renderForm();
      view.renderBooks();
    },
    getBooks: () => {
      return model.getBooks()
    },
    createBook: (obj) => {
      model.createBook(obj)
      view.renderBooks();
      view.renderForm();
    },
    markAsRead: (index) => {
      model.markAsRead(index)
      view.renderBooks();
    }
  }

  const view = {
    renderForm: () => {
      let htmlString = `
        <input id="name" placeholder="Name">
        <input id="image" placeholder="image">
        <input id="author" placeholder="author">
        <input id="year" placeholder="year">
        <button id="submit">Submit</button>
      `
      document.querySelector("#form").innerHTML = htmlString

      
      document.querySelector("#submit").addEventListener('click', () => {
        const name = document.querySelector("#name").value
        const image = document.querySelector("#image").value
        const author = document.querySelector("#author").value
        const year = document.querySelector("#year").value

        octopus.createBook({name: name, image: image, author: author, year: year})

      })
    },

    renderBooks: () => {
      let htmlString = ""
      
      for (const book of octopus.getBooks()) {
        const bookRead = book.read ? "read" : ""
        htmlString += `<div class='book ${bookRead}'><img src='${book.image}'><ul><li>Title: ${book.name}</li><li>Author: ${book.author}</li><li>Year Published: ${book.year}</li></div>`
      }

      document.querySelector("#books").innerHTML = htmlString;

      const books = Array.from(document.getElementsByClassName("book"))
      
      books.forEach((book, index) => {
        book.addEventListener('click', (e) => {
          octopus.markAsRead(index)
        })
      })
    }
  }

  octopus.init();

})