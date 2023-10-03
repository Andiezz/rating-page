import styled, { keyframes } from "styled-components";
import { px2vw } from "../responsive";
import { fadeIn } from "react-animations";
import { useNavigate } from "react-router-dom";
import ImgSrc from '.././bg_tiin.png';
import ImgLogo from '.././logo_tiin2.png';
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

const Logo = styled.img`
height: ${px2vw(45)};
width: ${px2vw(60)};
margin-top: ${px2vw(40)};
margin-bottom: ${px2vw(100)};
`;

const Content = styled.div`
flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Top = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: ${px2vw(80)};
    margin: 0;
`

const Bot = styled.p`
    font-family: 'SF Pro Display', sans-serif;
    font-size: ${px2vw(20)};
    margin: 0;
    font-style: italic;
`
const End = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate(`/question1`)
        }, 2000);
    }, []);
    return (
        <Container>
            <Wrapper>
                <Logo src={ImgLogo} />
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