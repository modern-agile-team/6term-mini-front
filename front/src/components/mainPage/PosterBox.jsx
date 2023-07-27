import React, { useEffect, useState } from "react";
import getMovieApi from "../../api/getMovieApi";
import AccessBox from "../public/AccessBtn";

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
        <div style={{
            margin: 20,
        }}>
            <div style={{
                width: 220,
                height: 300,
                backgroundColor: "#aff"
            }}>
                포스터가 올 자리입니다.
            </div>
            <div style={{
                display:"flex",
                flexDirection: "row",
            }}>
                <AccessBox>Likes❤</AccessBox>
                <AccessBox>예매하기</AccessBox>
            </div>
        </div>
    );
}

export default PosterBox;