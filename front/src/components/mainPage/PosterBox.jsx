import React, { useEffect, useState } from "react";
import getMovieApi from "../../api/getMovieApi";
import AccessBox from "../public/AccessBtn";

function PosterBox(props) {
    const [ likeCount , setLikeCount ] = useState(0);
    const movieTitle = props.movieTitle;
    const moviePoster = props.moviePoster;
    const movieRuntime = props.movieRunTime;

    const likeBtn = () => {
        setLikeCount(likeCount+1);
    }

    useEffect(()=>{

    }, [])

    return (
        <div style={{
            margin: 20,
        }}>
            <div style={{
                width: 220,
                height: 300,
                backgroundImage: `${moviePoster}`,
                backgroundColor: "#aaee2f",
                display:"flex",
                flexDirection: "column",
            }}>
                <div>영화제목 : {movieTitle}</div>
                <div style={{
                    marginTop:"auto",
                }}>런타임 : {movieRuntime}</div>
            </div>
            <div style={{
                display:"flex",
                flexDirection: "row",
            }}>
                <div style={{
                    border: 1,
                    cursor: "pointer",
                    fontSize: 25,
                    color: `#f00`,
                }} onClick={likeBtn}>❤{likeCount}</div>
                <div style={{
                    marginLeft: "auto",
                    cursor: "pointer",
                    backgroundColor: "rgba(107, 129, 145, 0.82)",
                    width: 100,
                    height: 40,
                    textAlign: "center",
                    fontSize: 20,
                    borderBottomRightRadius: 10,
                    borderBottomLeftRadius : 10,
                }}>예매하기</div>
            </div>
        </div>
    );
}

export default PosterBox;