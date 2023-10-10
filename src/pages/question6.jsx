import React, { useCallback, useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import Emoji from '../components/emoji';
import { px2vw } from '../responsive';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, sendAnswer } from '../redux/answerSlice';
import { useNavigate } from 'react-router-dom';
import ImgLogo from '.././logo_tiin2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const containAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgSrc});
    background-size: cover;
    animation: 1s ${containAnimation};
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 70%;
    height: 100%;
    text-align: center;
`;

const Return = styled(FontAwesomeIcon)`
    position: absolute;
    font-size: ${px2vw(30)};
    top: ${px2vw(10)};
    left: ${px2vw(10)};
    cursor: pointer;
`;

const Logo = styled.img`
position: absolute;
height: ${px2vw(30)};
top: ${px2vw(20)};
`;

const Question = styled.div`
    font-size: ${px2vw(20)};
    font-family: 'Quicksand', sans-serif;
    margin: ${px2vw(20)};
`;
const Title = styled.div`
    font-size: ${px2vw(25)};
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
`;

const Keyword = styled.span`
    font-size: ${px2vw(25)};
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: bold;
`;

const Input = styled.textarea`
    width: 100%;
    height: ${px2vw(150)};
    margin: ${px2vw(20)};
    padding: ${px2vw(12)} ${px2vw(20)};
    box-sizing: border-box;
    border: ${px2vw(2)} solid #ccc;
    border-radius: ${px2vw(10)};
    background-color: #f8f8f8;
    font-size: ${px2vw(16)};
    resize: none;

`;

const Button = styled.div`
margin: ${px2vw(20)};
box-sizing: border-box;
border: ${px2vw(1)} solid #212121;
border-radius: ${px2vw(90)};
font-family: 'Quicksand', sans-serif;
font-style: normal;
font-weight: ${px2vw(400)};
font-size: ${px2vw(15)};
line-height: ${px2vw(20)};
text-transform: uppercase;
padding: ${px2vw(10)};
color: #212121;
cursor: pointer;
&:active{
    background-color: #bcbcbc;
}
`;

const Question6 = () => {
    const location = useSelector((state) => state.answer.location);
    const questions = useSelector((state) => state.answer.questions)
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const time = new Date().toLocaleString();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            dispatch(sendAnswer(questions))
            navigate(`/end`)// simulate a delay
        }
    }, [loading]);

    const handleChange = useCallback(
        (e) => {
            setDescription(e.target.value);
        }, [description])

    const handleClick = () => {
        dispatch(addAnswer({
            location: location,
            number: 6,
            time: time,
            description: description
        }))
        setLoading(true);
    }

    const handleReturn = () => {
        navigate("/question5");
    }

    return (
        <Container>
            <Wrapper>
                <Return icon="fa-solid fa-left-long" onClick={handleReturn} />
                <Logo src={ImgLogo} />
                <Question>
                    Câu 6/6
                </Question>
                <Title>
                    Lý do vì sao bạn lựa chọn số điểm trên vậy ạ?
                </Title>
                <Input placeholder='(Nếu có)' onChange={handleChange} />
                <Button onClick={() => handleClick()}>
                    Submit
                </Button>
            </Wrapper>
        </Container>
    )
}

export default Question6