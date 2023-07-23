import React, { useEffect, useState } from "react";


const ShowBooks = ({harryBooks,sherlockBooks}) =>{
    let[bookDetails,setBookDetails] = useState("")

    console.log(bookDetails);



    // console.log(harryBooks)
    // console.log(sherlockBooks)


    return(
        <div className="booksContainer">
            <h3>More Books</h3>
            <div className="showAll">
                {
                    
                    sherlockBooks &&
                    sherlockBooks.map((book) =>{
                        return(
                                <div className="bookDetails" onClick={()=>setBookDetails(book.volumeInfo)}>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                </div>
                        ) 
                    })  
                }
                {
                    harryBooks &&
                    harryBooks.map((book) =>{
                        return(
                                <div className="bookDetails" onClick={()=>setBookDetails(book.volumeInfo)}>
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                                </div>
                        ) 
                    })
                }
            </div>
            
        </div>
    )
}

export default ShowBooks