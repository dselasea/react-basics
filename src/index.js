import React from "react";
import ReactDom  from "react-dom";
// adding css
import "./index.css";

const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/910N36lR%2BkL._AC_UL200_SR200,200_.jpg",
  title: "Dune(Dune Chronicles, Book 1)",
  author: "Frank Herbert"

};

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/91DEviT3oUL._AC_UL200_SR200,200_.jpg",
  title: "How to Catch a Turkey",
  author: "Adam Wallace"

};

function BookList(){
  return (
    <section className="booklist">
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author}/>
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique blanditiis dolor mollitia culpa obcaecati doloribus, corrupti ipsa nam, rerum eum incidunt ea quibusdam sunt, voluptatibus corporis iusto? Ratione, distinctio in!</p>
      </Book>
    </section>
  );
}

// The book component is a function
const Book = (props) => {
  const {img, title, author} = props;
  return ( 
    <article className="book">
     <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
   );
}


ReactDom.render(<BookList />,document.getElementById('root'));