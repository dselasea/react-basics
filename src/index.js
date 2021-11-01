import React from "react";
import ReactDom  from "react-dom";
// adding css
import "./index.css";

function BookList(){
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "Frank Herbert";
const Book = () => {
  const title = "Dune(Dune Chronicles, Book 1)";
  return ( 
    <article className="book">
     <img src="https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg" alt="" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
   );
}


ReactDom.render(<BookList />,document.getElementById('root'));