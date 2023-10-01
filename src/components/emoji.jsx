import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { bounce, fadeIn, fadeInRight, fadeInRightBig, flash, flip, hinge, pulse, slideInRight } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, fetchAnswer, sendAnswer } from '../redux/answerSlice';

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

const Button = styled.button``
const Emoji = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const location = useSelector((state) => state.answer.location);
    useEffect(() => {
        if (loading) {
            navigate(`/question${props.index}`)// simulate a delay
        }
    }, [loading]);

    const time = new Date().toLocaleString()
    const handleClick = (score) => {

            dispatch(sendAnswer({
                questions: [{
                    location: location,
                    number: props.index - 1,
                    score: score,
                    total: 5,
                    time: time,
                }]
            }))
            setLoading(true);
        
    }

    return (
        <>
            <Rating>
                <Content>
                    <Link onClick={() => { handleClick(1) }} style={{ textDecoration: 'none', color: 'black' }} >
                        <Angry icon="fa-regular fa-face-angry" />
                        <AngryAnimation icon="fa-solid fa-face-angry" />
                        <Label> TỆ</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(2)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Frown icon="fa-regular fa-face-frown" />
                        <FrownAnimation icon="fa-solid fa-face-frown" />
                        <Label>KHÔNG HÀI LÒNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(3)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Meh icon="fa-regular fa-face-meh" />
                        <MehAnimation icon="fa-solid fa-face-meh" />
                        <Label>BÌNH THƯỜNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(4)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Grin icon="fa-regular fa-face-grin-wide" />
                        <GrinAnimation icon="fa-solid fa-face-grin-wide" />
                        <Label>HÀI LÒNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(5)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Laugh icon="fa-regular fa-face-laugh-beam" />
                        <LaughAnimation icon="fa-solid fa-face-laugh-beam" />
                        <Label>TUYỆT VỜI</Label>
                    </Link>
                </Content>
                {/* <Content>
                    <Face>
                        <EyeLeft/>
                        <EyeRight/>
                        <Mouth/>
                    </Face>
                </Content> */}
            </Rating>
        </>
    )
}

export default Emoji