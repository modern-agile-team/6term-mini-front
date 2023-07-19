import React from "react";
import Container from "../components/Container";
import StyledLink from "../components/StyledLink";

function StartPage() {
    return (
        <Container>
            환영합니다.
            <StyledLink to="/login">로그인 화면으로 이동</StyledLink>
        </Container>
    );
}

export default StartPage;