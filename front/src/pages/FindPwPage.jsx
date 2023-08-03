import React ,{ useState }  from "react";
import InputText from "../components/public/InputText";
import Container from "../components/public/Container";
import Box from "../components/public/Box";
import TitleBg from "../components/public/TitleBg";
import ButtonUI from "../components/public/ButtonUI";
import StyledLink from "../components/public/StyledLink";
import MarginTen from "../components/public/MarginTen";
import findIdApi from "../api/findIdApi";   
import AccessBox from "../components/public/AccessBtn";

function FindPwPage() {
    const [ findPw, setFindPw ] = useState({
        loginId: "",
        email: "",
    });

    const onChange = (e) => {
        setFindPw((findPw)=>{
            return {
                ...findPw,
                [e.target.name] : e.target.value,
            };
        });
    }

    const currectBtn = () => {
        findIdApi("pw", findPw);
    };

    const onSubminHandler = (e) => {
        e.preventDefault();
    }

    return (
        <Container margin={100}>
            <Box width={536} height={300}>
            <TitleBg size={40}>비밀번호 찾기</TitleBg>
            <form onSubmit={onSubminHandler}>
                <Container>
                    <InputText name="loginId" type="text" placeholder="아이디" onChange={onChange}/>
                    <InputText name="email" type="text" placeholder="이메일" onChange={onChange}/>
                </Container>
                <Container>
                        <AccessBox onClick={currectBtn}>
                            <ButtonUI>확인</ButtonUI>
                        </AccessBox>
                </Container>
                <Container>
                    <MarginTen>
                        <StyledLink to="/login">로그인</StyledLink> | 
                        <StyledLink to="/findid">아이디 찾기</StyledLink> | 
                        <StyledLink to="/signup"> 회원가입</StyledLink>
                    </MarginTen>
                </Container>
            </form>
        </Box>
    </Container>
    );
}

export default FindPwPage;