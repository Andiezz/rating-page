import React from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import ImgLogo from '.././logo_tiin2.png';
import Emoji from '../components/emoji';
import { px2vw } from '../responsive';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
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

const Question3 = () => {
    const location = useSelector((state) => state.answer.location);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/question2");
    }

    return (
        <Container>
            <Wrapper>
                <Return icon="fa-solid fa-left-long" onClick={handleClick} />
                <Logo src={ImgLogo} />
                <Question>
                    Câu 3/6
                </Question>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng của mình
                </Title>
                <Title>
                    về sự hỗ trợ của {' '}
                    <Keyword>
                        Các bác/chú bảo vệ
                    </Keyword>
                    :
                </Title>
                <Emoji index={4} location={location} />
            </Wrapper>
        </Container>
    )
}

export default Question3