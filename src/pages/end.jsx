import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { mobile } from "../responsive";
import { fadeIn } from "react-animations";
import { Link, useNavigate } from "react-router-dom";
import ImgSrc from '.././bg_tiin.png';
import { useEffect } from "react";


const containAnimation = keyframes`${fadeIn}`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgSrc});
    background-size: cover;
    animation: 2s ${containAnimation};
`;

const Wrapper = styled.div`
display: flex;
height: 100%;
align-items: center;
flex-direction: column;
`;

const Logo = styled.div`
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 20px;
 margin-top: 30px;
 margin-bottom: 200px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Top = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 80px;
    margin: 0;
`

const Bot = styled.p`
    font-size: 20px;
`
const End = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(`/`)
        }, 2000);
      }, []);
    return (
        <Container>
            <Wrapper>
                <Logo>
                    Tiin
                </Logo>
                <Content>
                    <Top>
                        Cảm ơn bạn!
                    </Top>
                    <Bot>
                        VÌ ĐÃ LỰA CHỌN TIIN STORE 
                    </Bot>
                </Content>
            </Wrapper>
        </Container>
    );
};

export default End;