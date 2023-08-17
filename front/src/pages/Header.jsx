import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {
    AccessBox,
    Container,
    TitleBg,
} from "../components/public/StyledComponent";
import logOutApi from "../api/logOutApi";

function Header() {
    const navigate = useNavigate();
    
    //logo눌렀을 때, 토큰이 있으면 main페이지로 이동 없으면 x
    const logoBtn = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            navigate("/");
        } else {
            navigate("/mainpage");
        }
    }

    //마이페이지 눌렀을 때, 토튼 있으면 접근
    const handleGoMyPage = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            alert('로그인이 필요합니다.');
        } else {
            navigate("/mypage");
        }
    }

    const handleUnload = async () => {
        await logOutApi("logout")
    }

    //페이지 닫을 시 서버 토큰 제거
    useEffect(() => {
        window.addEventListener("beforeunload", handleUnload);
      
        return () => window.removeEventListener("beforeunload", handleUnload);
      }, [handleUnload]);

    return (
        <Container>
            <TitleBg>
                    <AccessBox onClick={logoBtn}>
                        <BigFont>혼</BigFont>자보는<BigFont>영</BigFont>화<BigFont>관</BigFont>
                    </AccessBox>
                    <HeaderBox>
                        <AccessBox onClick={handleGoMyPage}>
                            <img 
                            src={"https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/free-icon-user-1946429.png"}
                            style={{
                                width:50,
                                height:50,
                            }}
                            alt="회원정보 페이지 로고"
                            />
                        </AccessBox>
                    </HeaderBox>
            </TitleBg>
        </Container>
    )
}


const BigFont = styled.span`
    font-size: 60px;
    font-weight: bold;
    color: #000;
`;

const HeaderBox = styled.div`
    margin: auto 20px 10px auto;
`;

export default Header;