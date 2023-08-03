import React ,{ useState }  from "react";
import findIdApi from "../api/findIdApi";   
import {
    AccessBox,
    InputText,
    Container,
    Box,
    TitleBg,
    ButtonUI,
    StyledLink,
    MarginTen
} from "../components/public/StyledComponent";

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