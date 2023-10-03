import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn, } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import { Link, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { sendAnswer } from '../redux/answerSlice';
import { px2vw } from '../responsive';

const containAnimation = keyframes`${fadeIn}`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ImgSrc});
    background-size: cover;
    /* animation: 2s ${containAnimation}; */
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
    font-size: ${px2vw(40)};
    word-wrap: break-word;
    font-family: 'playfair display', sans-serif;
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
    height: ${px2vw(65)};
    width: ${px2vw(65)};
    margin: ${px2vw(40)} ${px2vw(10)};
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;

    font-family: 'SF Pro Display';
    font-weight: 400;
    font-size: ${px2vw(32)};
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
display: flex;
justify-content: center;
align-items: center;
font-family: 'SF Pro Display', sans-serif;
font-size: ${px2vw(20)};
`
const LevelLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 ${px2vw(10)};
    transform: translateY(${px2vw(2)});
`;

const Line = styled.hr`
    height: ${px2vw(1)};
    width: 100%;
    border: 0;
    background: black;
    transform: translateY(${px2vw(-0.5)});
`;
const Dot = styled.hr`
    height: ${px2vw(5)};
    width: ${px2vw(5)};
    background: black;
    border: 0;
    transform: rotate(45deg);
`;

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