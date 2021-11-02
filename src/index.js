import React from "react";
import ReactDom  from "react-dom";
// adding css
import "./index.css";

const books = [{
  id: 1,
  img: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
  title: "Dune(Dune Chronicles, Book 1)",
  author: "Frank Herbert"

},

{
  id: 2,
  img: "https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
  title: "How to Catch a Turkey",
  author: "Adam Wallace"

},
{
  id: 3,
  img: "https://images-na.ssl-images-amazon.com/images/I/81YHHiNPDNL._AC_UL200_SR200,200_.jpg",
  title: "The Storyteller: Tales of Life and Music",
  author: "Dave Grohl"

},

{
  id: 4,
  img: "https://images-na.ssl-images-amazon.com/images/I/71xPLm2FenL._AC_UL200_SR200,200_.jpg",
  title: "Taste: My Life Through Food",
  author: "Stanley Tucci"
}];


function BookList(){
  return (
    <section className="booklist">
      {books.map((book) => {
        return (
          <Book key={book.id} {...book} />
        )
      })}
    </section>
  );
}

// The book component is a function

const Book = (props) => {
  const {img, title, author} = props;
  const complexExample = (author) => {
      console.log(author);
  }

  return ( 
    <article className="book">
     <img src={img} alt="" />
      <h1 onMouseOver={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button">complex example</button>
      <button type="button" onClick={complexExample(author)}>more complex example</button>
    </article>
   );
}


ReactDom.render(<BookList />,document.getElementById('root'));