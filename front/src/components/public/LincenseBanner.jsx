import React from "react";

const LicenseBanner = () => {
    return (
        <div style={{
            backgroundColor: '#f5f5f5',
            color: '#333',
            padding: '10px',
            bottom: 0,
            left: 0,
            width: '100%',
            textAlign: 'center',
            marginTop: 100
            }}>
            <img src={"https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%E1%84%86%E1%85%A9%E1%84%83%E1%85%A5%E1%86%AB%E1%84%8B%E1%85%A2%E1%84%8C%E1%85%A1%E1%84%8B%E1%85%B5%E1%86%AF+%E1%84%85%E1%85%A9%E1%84%80%E1%85%A9.png"} 
            style={{
                width: 80,
                heigh: 50,
            }} />
            <div>
                Copyright of the Modern Agile Team
            </div>
        </div>
    )
};

export default LicenseBanner;