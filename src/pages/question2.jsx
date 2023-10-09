import React from 'react'
import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import ImgSrc from '.././bg_tiin.png';
import ImgLogo from '.././logo_tiin2.png';
import Emoji from '../components/emoji';
import { px2vw } from '../responsive';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAsyncValue, useNavigate } from 'react-router-dom';
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
    top: ${px2vw(50)};
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

const Question2 = () => {
    const location = useSelector((state) => state.answer.location);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/question1");
    }
    return (
        <Container>
            <Wrapper>
                <Return icon="fa-solid fa-left-long" onClick={handleClick} />
                <Logo src={ImgLogo} />
                <Question>
                    Câu 2/6
                </Question>
                <Title>
                    Bạn vui lòng đánh giá mức độ hài lòng của mình
                </Title>
                <Title>
                    về{' '}
                    <Keyword>
                        không gian mua sắm (phòng thử đồ, mùi hương, âm thanh, ánh sáng, trưng bày sản phẩm...):
                    </Keyword>
                </Title>
                <Emoji index={3} location={location} />
            </Wrapper>
        </Container>
    )
}

export default Question2