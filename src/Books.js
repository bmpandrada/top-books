import React from "react";
 const Book = (props) =>{
    const {img, title, author, description, btn, number} = props
    // console.log(props)
    return ( 
    <article className="book">
    <span className="num">{`# ${number+1}`}</span> 
    <img src={img} alt={title}/>
    <h2>{title}</h2>
    <h4>{author}</h4>
    <p>{description}</p>
       <button><a href={btn}>Buy Now</a></button>
    </article>)
;};

export default Book;