import React from 'react'
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, fadeInRight, fadeInRightBig, flash, flip, hinge, pulse, slideInRight } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import Emoji from '../components/emoji';
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
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    text-align: center;
`;

const Title = styled.a`
    font-size: 40px;
    word-wrap: break-word;
`;

const Rating = styled.div`
    display: flex;
`;

const Angry = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #a7a6a6;
&:hover{
    color: #FF7D7D
}
`;

const Frown = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #a7a6a6;
&:hover{
    color: #FF9153
}
`;

const Meh = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #a7a6a6;
&:hover{
    color: #FFD874
}
`;

const Grin = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #a7a6a6;
&:hover{
    color: #A2E56D
}
`;

const Laugh = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #a7a6a6;
&:hover{
    color: #2C9D3E
}
`;
const Label = styled.p`
`;

const Question2 = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng của mình về Phòng thử đồ và không gian mua sắm tại cửa hàng:
                </Title>
                <Emoji index = {3}/>
            </Wrapper>
        </Container>
    )
}

export default Question2