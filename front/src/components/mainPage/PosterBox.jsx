import React, { useEffect, useState } from "react";
import getMovieApi from "../../api/getMovieApi";

function PosterBox() {
    const [ movie, setMovie ] = useState({
       movieTitle: "",
       moviePoster: "", //url
       movieRunTime: "" 
    });

    const textfunc = async () => {
        const a = await getMovieApi();
        console.log(a);
    }

    useEffect(()=>{
        textfunc();
    }, [])

    return (
        <div>
            
        </div>
    );
}

export default PosterBox;