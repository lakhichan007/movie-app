import React from "react";
import { useEffect } from "react";
import "./movie.css"
import { useState } from "react";
const Movie = ({searched}) => {
    var [mymovie, setmymovie] = useState([])
    const [favmovie,setfavmovie]=useState([])
    useEffect(() => {
        fetch("https://fake-movie-database-api.herokuapp.com/api?s=batman")
            .then(res => res.json())
            .then(data => {
                setmymovie(data.Search)
            })
    }, [])
    const addfav=(id)=>{
        console.log(id)
        setfavmovie([...favmovie,id])
    }
    // console.log(mymovie)
    const seachedmovie=mymovie.filter((ele)=>{
        return ele.Title.includes(searched)
    })
    if(searched==""){
    mymovie=mymovie
    }
    else{
        mymovie=seachedmovie
    }

    const addfavmovie= mymovie.filter((ele)=>{
        return ele.imdbID.includes(favmovie[0])
    })
    console.log(addfavmovie)
    return (
        <>
            <div id="movie-container">
                <div id="all-movie">
                    {mymovie.map((movie) => {
                        return (
                            
                            <>
                            
                                <div id="poster-box" key={movie.imdbID}>
                                    <img src={movie.Poster} alt="" />
                                    <p id="title">{movie.Title}</p>
                                    <button id="addfav-btn" 
                                    onClick={()=>addfav(movie.imdbID)} >Add favourite</button>
                                </div>
                            </>
                        )

                    })}
                </div>
                <div id="fav-movie">
                    <h1 id="favfav">Favourite:-</h1>

                    {addfavmovie.map((movie) => {
                        return (
                            
                            <>
                            
                                <div id="poster-box" key={movie.imdbID}>
                                    <img src={movie.Poster} alt="" />
                                    <p id="title">{movie.Title}</p>
                                
                                </div>
                            </>
                        )

                    })}
                </div>
                
            </div>
        </>
    )
}
export default Movie