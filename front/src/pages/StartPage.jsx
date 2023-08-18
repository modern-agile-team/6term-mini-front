import React from "react";
import { Link, useNavigate } from "react-router-dom"
import {
    Container,
    ButtonUI,
    StyledLink,
    AccessBox,
} from "../components/public/StyledComponent";
function StartPage() {
    //시작 페이지 개발자 프로필 등록
    const navigate = useNavigate();

    const handleToLoginPage = () => {
        if (localStorage.getItem(`accessToken`) === null) {
            navigate('/login');
        } else {
            navigate('/mainpage');
        }
    }

    return (
        <Container>
            <AccessBox onClick={handleToLoginPage}>
                <ButtonUI>로그인 화면으로 이동</ButtonUI>
            </AccessBox>
            <h2>모던애자일 6기 MINI PROJECT</h2>
            <div>
                <div style={{textAlign:"center"}}>BACK-END</div>
                <div style={{
                    display: "flex",
                }}>
                    <div>
                        <img style={{
                            width: 120,
                            height: 150,
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%EB%B0%95%EC%A4%80%ED%98%81+%EC%82%AC%EC%A7%84" 
                        alt="박준혁사진"
                        />
                        <div>박준혁</div>
                        <Link to="https://github.com/NicoDora" target="_blank">GitHub</Link>
                    </div>
                    <div>
                        <img style={{
                            width: 120,
                            height: 150,
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EC%8A%B9%EC%9A%B0+%EC%82%AC%EC%A7%84" 
                        alt="이승우사진"
                        />
                        <div>이승우</div>
                        <Link to="https://github.com/2swo" target="_blank">GitHub</Link>
                    </div>
                </div>
                <div style={{textAlign:"center"}}>FRONT-END</div>
                <div style={{
                    display: "flex",
                }}>
                    <div>
                        <img style={{
                            width: 120,
                            height: 150,
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%EC%9D%B4%EC%9E%AC%EC%A7%84+%EC%82%AC%EC%A7%84" 
                        alt="이재진사진"
                        />
                        <div>이재진</div>
                        <Link to="https://github.com/zzzRYT" target="_blank">GitHub</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default StartPage;