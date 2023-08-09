import React from "react";
import { Link } from "react-router-dom"
import {
    Container,
    ButtonUI,
    StyledLink,
} from "../components/public/StyledComponent";
function StartPage() {
    //시작 페이지 개발자 프로필 등록
    return (
        <Container>
            <StyledLink to="/login">
                <ButtonUI>로그인 화면으로 이동</ButtonUI>
            </StyledLink>
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
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230530_132243331_02.jpg" 
                        alt="박준혁사진"
                        />
                        <div>박준혁</div>
                        <Link to="https://github.com/NicoDora" target="_blank">GitHub</Link>
                    </div>
                    <div>
                        <img style={{
                            width: 120,
                            height: 150,
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/%E1%84%89%E1%85%A1%E1%84%8C%E1%85%B5%E1%86%AB.jpg" 
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
                        }}src="https://ma6-mini-poster.s3.ap-northeast-2.amazonaws.com/KakaoTalk_20230530_132243331_01.jpg" 
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