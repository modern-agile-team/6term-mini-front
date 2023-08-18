import React from "react";
import styled from "styled-components";

const QRCodePage = () => {

    const handleCopyClipBoard = () => {
        navigator.clipboard.writeText("honyeonggwan@gmail.com")
        alert('클립보드가 복사되었습니다.');
    }

    return (
        <div>
            <div style={{
                display: "flex",
                flexDirection: "column",
                marginTop: 200,
                margin: 200,
                justifyContent: "center",
                alignItems: "center",
            }}>
                <h1>사이트를 이용해 주셔서 감사합니다.</h1>
                <div>문의사항 : <button onClick={handleCopyClipBoard}>honyeonggwan@gmail.com</button>로 보내주세요.</div>
            </div>
        </div>
    );
}


export default QRCodePage;