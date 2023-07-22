import React,{ useEffect } from "react";
import Arrow from "../images/Arrow.svg";
import profile from "../images/profile.svg";
import axios from "axios";

const Navbar =({setHarryBooks, setsherlockBooks}) =>{

    useEffect(()=>{
        harryBookData()
        sherlockBookData()
    },[])

    // Harry-potter book details calling
    function harryBookData(){
        axios.get("https://www.googleapis.com/books/v1/volumes",{
            params:{q:"harry potter"}
        })
        .then((res) => setHarryBooks(res.data.items))
        .catch((error) =>{console.log("something Wrong!",error)})
    }
    // Sherlock-Holmes book details calling
    function sherlockBookData(){
         axios.get("https://www.googleapis.com/books/v1/volumes",{
            params:{q:"Sherlock Holmes"}
        })
        .then((res) => setsherlockBooks(res.data.items))
        .catch((error) =>{console.log("something Wrong!",error)})
    }
  
    return (
        <div className="navbar">
            <div className="left_div">
                <img src={Arrow} alt="Arrow_image" />
                <div>
                    <span id="keazon">KeazoN</span>
                    <span id="book">BOOKS</span> 
                </div>
            </div>
            <div className="middle_div">
                <div>
                    <span class="material-symbols-outlined" id="search">search</span>
                    <input type="text" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." />
                </div>
                <button>Search</button>
            </div>
            <div className="right_div"> 
                <span class="material-symbols-outlined">app_shortcut</span>
                <span class="material-symbols-outlined">notifications</span>
                <span class="material-symbols-outlined">diamond</span>
                <img src={profile} alt="Profile_Image" />
            </div>
        </div>
    )
}

export default Navbar;