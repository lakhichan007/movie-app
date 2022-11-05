import React from "react";
import { useState } from "react";
import Movie from "../movie/movie";
import "./header.css"
 const Header=()=>{
    const [text,settext]=useState("")
    return(
        <>
        <div id="header-container">
            <h1>MOVIES</h1>
            <input  id="search-box" type="text"  placeholder="Search..." onChange={(e)=>settext(e.target.value.toUpperCase())}/>
        </div>
        <Movie searched={text}/>
        </>
    )
 }
export default Header