import React from 'react'

const Book = (props) => {
  const {img, title, author} = props;

  const clickHandler = (e) => {
    console.log(e);
  }

  const complexExample = (author) => {
      console.log(author);
  }

  return ( 
    <article className="book" onMouseOver={() => {console.log(title)}}>
     <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>complex example</button>
      <button type="button" onClick={() => complexExample(author)}>more complex example</button>
    </article>
   );
}

export default Book;