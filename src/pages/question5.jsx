import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn, } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import { Link, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, sendAnswer } from '../redux/answerSlice';

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
const Label = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const Answer1 = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    height: 65px;
    width: 65px;
    margin: 10px;
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-weight: 400;
    font-size: 31.2058px;
    color: #212121;

    &:active {
        background-color: #888888;
        color: white;
    }
`;

const Level = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`;

const LevelTitle = styled.div`

`
const LevelLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 10px;
    transform: translateY(2px);
`;

const Line = styled.hr`
    height: 1px;
    width: 100%;
    border: 0;
    background: black;
`;
const Dot = styled.hr`
    height: 5px;
    width: 5px;
    background: black;
    border: 0;
    transform: rotate(45deg);
`;

const Button = styled.button``;
const Question5 = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const time = new Date().toLocaleString()
    const navigate = useNavigate();
    const location = useSelector((state) => state.answer.location);
    useEffect(() => {
        if (loading) {
            navigate(`/end`)// simulate a delay
        }
    }, [loading]);

    const handleClick = (score) => {

        dispatch(sendAnswer({
            questions: [{
                location: location,
                number: 5,
                score: score,
                total: 10,
                time: time,
            }]
        }))
        setLoading(true);
    
}


    return (
        <Container>
            <Wrapper>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng trên thang điểm từ 1-10?
                </Title>
                <Label>
                    {[...Array(10)].map((key, index) => {
                        const currentScore = index + 1;
                        return (
                            <label key={index}>
                                <Link onClick={() => handleClick(currentScore)} style={{ textDecoration: 'none', color: 'black' }}>
                                    <Answer1>
                                        {currentScore}
                                    </Answer1>
                                </Link>
                            </label>
                        )
                    })}
                </Label>
                <Level>
                    <LevelTitle>
                        CHƯA HÀI LÒNG
                    </LevelTitle>
                    <LevelLine>
                        <Dot />
                        <Line />
                        <Dot />
                    </LevelLine>
                    <LevelTitle>
                        HÀI LÒNG
                    </LevelTitle>
                </Level>
            </Wrapper>
        </Container>
    )
}

export default Question5