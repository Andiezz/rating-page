import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { mobile } from "../responsive";
import { fadeIn } from "react-animations";
import { Link } from "react-router-dom";
import ImgSrc from '.././bg_tiin.png';


const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${ImgSrc});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
`;

const logoAnimation = keyframes`${slideInUp}`;

const Logo = styled.div`
 display: flex;
 height: 100%;
 justify-content: center;
 align-items: center;
 font-size: 1in;
 animation: 2s ${logoAnimation};
`;

const buttonAnimation = keyframes`${fadeIn}`;

const Button = styled.button`
margin-top: 112px;
box-sizing: border-box;
border: 1.16446px solid #212121;
border-radius: 85.0059px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16.3025px;
line-height: 20px;
/* identical to box height */
letter-spacing: 0.05em;
text-transform: uppercase;
padding: 10px;
color: #212121;
 animation: 7s ${buttonAnimation};
 cursor: pointer;
`;

const Start = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    Tiin
                </Logo>
                <Link to="/location">
                    <Button>
                        start
                    </Button>
                </Link>
            </Wrapper>
        </Container>
    );
};

export default Start;