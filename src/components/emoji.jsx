import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, sendAnswer } from '../redux/answerSlice';
import { px2vw } from '../responsive';

const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: ${px2vw(40)};
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Angry = styled(FontAwesomeIcon)`
font-size: ${px2vw(100)};
margin: ${px2vw(20)};
background-color: #FF7D7D;
border-radius: 50%;
border: 0;
color: #f52d2d;
cursor: pointer;
&:hover{
    font-size: ${px2vw(140)};
    margin: 0px;
}
`;

const Frown = styled(FontAwesomeIcon)`
font-size: ${px2vw(100)};
margin: ${px2vw(20)};
background-color: #ffa068;
border-radius: 50%;
border: 0;
color: #ff6e1a;
cursor: pointer;
&:hover{
    font-size: ${px2vw(140)};
    margin: 0px;
}
`;

const Meh = styled(FontAwesomeIcon)`
font-size: ${px2vw(100)};
margin: ${px2vw(20)};
color: #ffbe1b;
background-color: #ffda7c;
border-radius: 50%;
border: 0;
cursor: pointer;
&:hover{
    font-size: ${px2vw(140)};
    margin: 0px;
}
`;

const Grin = styled(FontAwesomeIcon)`
font-size: ${px2vw(100)};
margin: ${px2vw(20)};
background-color: #c0ff90;
border-radius: 50%;
border: 0;
color: #7dff19;
cursor: pointer;
&:hover{
    font-size: ${px2vw(140)};
    margin: 0px;
}
`;

const Laugh = styled(FontAwesomeIcon)`
font-size: ${px2vw(100)};
margin: ${px2vw(20)};
background-color: #0ee632;
border-radius: 50%;
border: 0;
color: #00b41e;
cursor: pointer;
&:hover {
    font-size: ${px2vw(140)};
    margin: 0px;
}
`;
const Label = styled.p`
font-size: ${px2vw(16)};
text-align: center;
font-family: 'Quicksand', sans-serif;                                               
font-weight: 500;
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
    
    useEffect(() => {
        if (loading) {
            navigate(`/question${props.index}`)// simulate a delay
        }
    }, [loading]);

    const time = new Date().toLocaleString()
    const handleClick = (score) => {
        dispatch(addAnswer({
            location: props.location,
            number: props.index - 1,
            score: score,
            total: 5,
            time: time,
        }))
        setLoading(true);
    }

    return (
        <>
            <Rating>
                <Content>
                    <Link onClick={() => { handleClick(1) }} style={{ textDecoration: 'none', color: 'black' }} >
                        <Angry icon="fa-regular fa-face-angry" />
                        <Label> TỆ</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(2)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Frown icon="fa-regular fa-face-frown" />
                        <Label>KHÔNG HÀI LÒNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(3)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Meh icon="fa-regular fa-face-meh" />
                        <Label>BÌNH THƯỜNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(4)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Grin icon="fa-regular fa-face-grin-wide" />
                        <Label>HÀI LÒNG</Label>
                    </Link>
                </Content>
                <Content>
                    <Link onClick={() => handleClick(5)} style={{ textDecoration: 'none', color: 'black' }} >
                        <Laugh icon="fa-regular fa-face-laugh-beam" />
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