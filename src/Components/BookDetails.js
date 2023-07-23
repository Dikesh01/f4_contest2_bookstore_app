import React from "react";

const BookDetails = ({bookDetails}) =>{
    
    console.log(bookDetails);

    return (
        <div>
            {
                bookDetails &&
                 <div className="detail_container">
                        <div className="leftImgDiv">
                            <img src={bookDetails.imageLinks.thumbnail} alt={bookDetails.title} />
                        </div>
                        <div className="otherDetails">
                               <div className="title_publishDate">
                                    <div>
                                        <h3>{bookDetails.title}</h3>
                                        <h5>{bookDetails.authors}</h5>
                                    </div>
                                    <div>
                                        <p>Published on : {bookDetails.publishedDate}</p>
                                    </div>
                               </div>
                                <p>{bookDetails.description}</p>
                                <div className="rating_container">
                                    <span>Avg Rating : {bookDetails.averageRating}</span>
                                    <span>Rating Count : {bookDetails.ratingsCount}</span>
                                    <span>Publisher : {bookDetails.publisher}</span>
                                    <span>Language : {bookDetails.language}</span>
                                </div>
                        </div>
                 </div>
            }
        </div>
    )
}

export default BookDetails;