import React, { useEffect, useState } from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn, } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import ImgLogo from '.././logo_tiin2.png';
import { Link, useNavigate, } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswer, addLocation, sendAnswer } from '../redux/answerSlice';
import { px2vw } from '../responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const containAnimation = keyframes`${ fadeIn }`;
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-image: url(${ ImgSrc });
    background-size: cover;
    animation: 1s ${ containAnimation };
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    text-align: center;
`;

const Return = styled(FontAwesomeIcon)`
    position: absolute;
    font-size: ${ px2vw(30) };
    top: ${ px2vw(10) };
    left: ${ px2vw(10) };
    cursor: pointer;
`;

const Logo = styled.img`
position: absolute;
height: ${ px2vw(30) };
top: ${ px2vw(20) };
`;

const Question = styled.div`
    font-size: ${ px2vw(20) };
    font-family: 'Quicksand', sans-serif;
    margin: ${ px2vw(20) };
`;

const Title = styled.div`
    font-size: ${ px2vw(25) };
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
`;

const Keyword = styled.span`
    font-size: ${ px2vw(25) };
    font-family: 'Quicksand', sans-serif;
    padding: 0;
    margin: 0;
    font-weight: bold;
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
    height: ${ px2vw(65) };
    width: ${ px2vw(65) };
    margin: ${ px2vw(40) } ${ px2vw(10) };
    border: 1px solid black;
    border-radius: 50%;
    cursor: pointer;

    font-family: 'Quicksand', sans-serif;
    font-weight: 400;
    font-size: ${ px2vw(32) };
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
font-family: 'Quicksand', sans-serif;
font-size: ${ px2vw(15) };
`
const LevelLine = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    margin: 0 ${ px2vw(10) };
    transform: translateY(${ px2vw(2) });
`;

const Line = styled.hr`
    height: ${ px2vw(1) };
    width: 100%;
    border: 0;
    background: black;
    transform: translateY(${ px2vw(0.4) });
`;
const Dot = styled.hr`
    height: ${ px2vw(5) };
    width: ${ px2vw(5) };
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
    const questions = useSelector((state) => state.answer.questions)
    useEffect(() => {
        if (loading) {
            navigate(`/question6`)// simulate a delay
        }
    }, [loading]);

    const handleClick = (score) => {

        dispatch(addAnswer({
            location: location,
            number: 5,
            score: score,
            total: 10,
            time: time,
        }))
        setLoading(true);

    }

    const handleReturn = () => {
        navigate("/question4");
    }

    return (
        <Container>
            <Wrapper>
                <Return icon="fa-solid fa-left-long" onClick={handleReturn} />
                <Logo src={ImgLogo} />
                <Question>
                    Câu 5/6
                </Question>
                <Title>
                    Bạn cho biết {' '}
                    <Keyword>
                        mức độ sẵn sàng giới thiệu Tiin Store
                    </Keyword>
                    {' '} với bạn bè, đồng nghiệp của bạn ạ?
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
                        KHÔNG GIỚI THIỆU
                    </LevelTitle>
                    <LevelLine>
                        <Dot />
                        <Line />
                        <Dot />
                    </LevelLine>
                    <LevelTitle>
                        SẴN SÀNG GIỚI THIỆU
                    </LevelTitle>
                </Level>
            </Wrapper>
        </Container>
    )
}

export default Question5