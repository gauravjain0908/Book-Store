import React from 'react'

function Bookstore() {
    return (
        <section>

         <Book />
         <Book />
         <Book />
         <Book />
         <Book />
         <Book />

        </section>
           
    )
}

const Book = () => {

    return <article>
        <Img>
        
        </Img>
    </article>
}

const Img = () => <img src="https://www.amazon.in/dp/1409181677/ref=s9_acsd_al_bw_c2_x_5_i?pf_rd_m=A1K21FY43GMZF8&pf_rd_s=merchandised-search-3&pf_rd_r=Y42B7TXZ8NTTJR745340&pf_rd_t=101&pf_rd_p=547173bb-3d8d-4795-bdfd-58060a6dba22&pf_rd_i=976389031"> </img>
export default Bookstore
