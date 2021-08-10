import React from 'react'
import './index.css'

function Bookstore() {
    return (
        <section className ="booklist">

         <Book />
         <Book />
         <Book />
        

        </section>
           
    )
}
const Book = () => {

    return <article>
        
        <Img />
        <Title />
        <Author />

    </article>
}

const Img = () => <img src="https://images-na.ssl-images-amazon.com/images/I/41EANP48VAL._SX322_BO1,204,203,200_.jpg" alt ="" ></img>
const Title = () => <h1 style= {{color: '#FFFF00', fontSize: '1 rem', marginTop: '0.50rem'}}> Alex Michalides</h1>
const Author = () => <h3 style = {{color: '#FFA500', fontSize:'1 rem', marginTop:"0.25rem", letterSpacing: "2.5px"}}> Ruskin Bond </h3>

export default Bookstore
