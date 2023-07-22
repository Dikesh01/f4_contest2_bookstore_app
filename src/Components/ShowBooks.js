import React, { useEffect, useState } from "react";


const ShowBooks = ({harryBooks,sherlockBooks}) =>{

    console.log(harryBooks)
    console.log(sherlockBooks)


    return(
        <div className="showAll">
            {
                
                harryBooks &&
                harryBooks.map((book) =>{
                    return(
                            <div>
                                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                            </div>
                    ) 
                })

                
            }
            
        </div>
    )
}

export default ShowBooks