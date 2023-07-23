import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ShowBooks from "./Components/ShowBooks";
import BookDetails from "./Components/BookDetails";


const App = () =>{

    let [harryBooks,setHarryBooks] = useState("");
    let [sherlockBooks,setsherlockBooks] = useState("");
    let [bookDetails,setBookDetails] = useState("");
    // console.log(sherlockBooks);

    return(
        <div>
            <Navbar setHarryBooks={setHarryBooks} setsherlockBooks={setsherlockBooks}/>
            <BookDetails bookDetails={bookDetails}/>
            <ShowBooks harryBooks={harryBooks} sherlockBooks={sherlockBooks} setBookDetails={setBookDetails} />
        </div>
    )
}

export default App;