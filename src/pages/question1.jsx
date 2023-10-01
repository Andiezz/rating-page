import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, fadeInRight, fadeInRightBig, flash, flip, hinge, pulse, slideInRight } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceAngry } from '@fortawesome/free-solid-svg-icons'
import Emoji from '../components/emoji';
import { useDispatch } from 'react-redux';
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
    align-items: center;
    justify-content: space-around;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Angry = styled(FontAwesomeIcon)`
position: absolute;
border-radius: 50%;
font-size: 100px;
margin: 20px;
color: #a7a6a6;
background-color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #FF7D7D
}
&:active{
    border: 0;
    color: transparent;
    background-color: transparent;
}
`;

const AngryAnimation = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #FF7D7D;
cursor: pointer;
`;

const Frown = styled(FontAwesomeIcon)`
position: absolute;
border-radius: 50%;
font-size: 100px;
margin: 20px;
color: #a7a6a6;
background-color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #FF9153
}
&:active{
    border: 0;
    color: transparent;
    background-color: transparent;
}
`;

const FrownAnimation = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #FF9153;
cursor: pointer;
`;

const Meh = styled(FontAwesomeIcon)`
position: absolute;
border-radius: 50%;
font-size: 100px;
margin: 20px;
color: #a7a6a6;
background-color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #FFD874
}
&:active{
    border: 0;
    color: transparent;
    background-color: transparent;
}
`;

const MehAnimation = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #FFD874;
cursor: pointer;
`;

const Grin = styled(FontAwesomeIcon)`
position: absolute;
border-radius: 50%;
font-size: 100px;
margin: 20px;
color: #a7a6a6;
background-color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #A2E56D
}
&:active{
    border: 0;
    color: transparent;
    background-color: transparent;
}
`;

const GrinAnimation = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #A2E56D;
cursor: pointer;
`;

const Laugh = styled(FontAwesomeIcon)`
position: absolute;
border-radius: 50%;
font-size: 100px;
margin: 20px;
color: #a7a6a6;
background-color: #FFFFFF;
cursor: pointer;
&:hover{
    color: #2C9D3E
}
&:active{
    border: 0;
    color: transparent;
    background-color: transparent;
}
`;

const LaughAnimation = styled(FontAwesomeIcon)`
font-size: 100px;
margin: 20px;
color: #2C9D3E;
cursor: pointer;
`;
const Label = styled.p`
font-size: 16px;
text-align: center;
`;

const Face = styled.div`
height: 100px;
width: 100px;
background-color: #ff6969;
border-radius: 50%;
`;

const EyeLeft = styled.div`
position: relative;
width: 12px;
height: 8px;
border-radius: 50% 50% 0 0 / 100% 100% 0 0;
background-color: red;
top: 35%;
left: 25%;
transform: rotateZ(10deg);
`;

const EyeRight = styled.div`
position: relative;
width: 12px;
height: 8px;
border-radius: 50% 50% 0 0 / 100% 100% 0 0;
background-color: red;
top: 27%;
left: 60%;
transform: rotateZ(-10deg);
`;

const Mouth = styled.div`
position: relative;
width: 60px;
height: 40px;
border: 2px solid transparent;
border-top-color: red;
border-radius: 50%;
top: 40%;
left: 17%;
`;

const Button = styled.button``;

const Question1 = () => {
    return (
        <Container>
            <Wrapper>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng của mình về sự hỗ trợ của các bạn tư vấn bán hàng:
                </Title>
                <Emoji index = {2}/>
            </Wrapper>
        </Container>
    )
}

export default Question1