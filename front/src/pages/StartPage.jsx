import React from "react";
import Container from "../components/public/Container";
import StyledLink from "../components/public/StyledLink";
import ButtonUI from "../components/public/ButtonUI";
import styled from "styled-components";
import { Link } from "react-router-dom"

function StartPage() {
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
                        }}src="https://file.notion.so/f/s/7ff558d0-c97b-4714-b531-987ec35365d1/KakaoTalk_20230530_132243331_02.jpg?id=82258536-7072-4faf-b576-2fd76d1521ba&table=block&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&expirationTimestamp=1690876800000&signature=jt51wTtAj0QVsZiQv1dldCJF_qPFuH3zPUt1ZGWCGOg&downloadName=KakaoTalk_20230530_132243331_02.jpg" />
                        <div>박준혁</div>
                        <Link to="https://github.com/NicoDora" target="_blank">GitHub</Link>
                    </div>
                    <div>
                        <img style={{
                            width: 120,
                            height: 150,
                        }}src="https://file.notion.so/f/s/14f75fb6-efde-41e0-9ab7-76c2efccd2ba/%EC%82%AC%EC%A7%84.jpg?id=0294c278-35dd-4562-8f28-86d8afed963e&table=block&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&expirationTimestamp=1690876800000&signature=EBxo_Q6yjp-vRE5vZKCW8AeVpocL5HsDqJ2IyjB4ucw&downloadName=%EC%82%AC%EC%A7%84.jpg" />
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
                        }}src="https://file.notion.so/f/s/338cf61c-cbf5-4b76-acf6-a7a9b4deb652/KakaoTalk_20230530_132243331_01.jpg?id=58b7705d-7ff7-49d0-896f-41170a63a5de&table=block&spaceId=0b241d7f-6520-4240-ac94-27957e3f3aa5&expirationTimestamp=1690876800000&signature=WFEkvhSkLlzKAM8FFq1_de4EVddXoIUew6f4OnTWSwg&downloadName=KakaoTalk_20230530_132243331_01.jpg" />
                        <div>이재진</div>
                        <Link to="https://github.com/zzzRYT" target="_blank">GitHub</Link>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default StartPage;