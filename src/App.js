import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import ShowBooks from "./Components/ShowBooks";


const App = () =>{

    let [harryBooks,setHarryBooks] = useState("");
    let [sherlockBooks,setsherlockBooks] = useState("");
    // console.log(sherlockBooks);

    return(
        <div>
            <Navbar setHarryBooks={setHarryBooks} setsherlockBooks={setsherlockBooks}/>
            <ShowBooks harryBooks={harryBooks} sherlockBooks={sherlockBooks} />
        </div>
    )
}

export default App;