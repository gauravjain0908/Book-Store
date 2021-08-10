import React from 'react'
import './index.css'

const FirstBook ={

    title: "Love Bytes",
    author: "Vandana Vaadera",
    img: "https://images-eu.ssl-images-amazon.com/images/I/418Ucei0LcS._AC_SX184_.jpg"
}
const SecondBook ={

    title: "Gods & Monsters",
    author: "Shelby Mahurin",
    img: "https://images-eu.ssl-images-amazon.com/images/I/51WM8Q+vfKS._AC_SX184_.jpg"

}

const ThirdBook ={
    
    title: "Man Enough: Undefining My Masculinity",
    author: "Justin Baldon",
    img: "https://images-eu.ssl-images-amazon.com/images/I/51ud1l90zhL._AC_SX184_.jpg"
}

function Bookstore() {
    return (
        <section className ="booklist">

         <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author} />  
         {/* we have passed in the object through the component using props */}
         <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author}></Book>
         <Book img={ThirdBook.img} title = {ThirdBook.title}  author = {ThirdBook.author}></Book>
    
        </section>
           
    )
}
const Book = ({img,title,author}) => {

    // const {img, title, author} = props  // another way to use props

    return (<article className = 'book'>

        <img src ={img}></img>
        <h1>{title}</h1>
        <h3>{author}</h3>
    </article>
   );
}
export default Bookstore