import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { mobile } from "../responsive";
import { fadeIn } from "react-animations";
import { Link, useNavigate } from "react-router-dom";
import ImgSrc from '.././bg_tiin.png';
import { useDispatch } from "react-redux";
import { addLocation } from "../redux/answerSlice";
import { useEffect, useState } from "react";

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
justify-content: space-around;
align-items: center;
flex-direction: column;
`;

const logoAnimation = keyframes`${slideInUp}`;

const Logo = styled.div`
 display: flex;
 height: 100%;
 justify-content: center;
 align-items: center;
 font-size: 1in;
 animation: 2s ${logoAnimation};
`;

const buttonAnimation = keyframes`${fadeIn}`;

const Button = styled.button`
margin-top: 112px;
box-sizing: border-box;
border: 1.16446px solid #212121;
border-radius: 85.0059px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16.3025px;
line-height: 20px;
/* identical to box height */
letter-spacing: 0.05em;
text-transform: uppercase;
padding: 10px;
color: #212121;
 cursor: pointer;
/* &:active{
    background-color: #a9a9a9;
} */
`;

const Content = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
`
const Title = styled.a`
    font-size: 40px;
    word-wrap: break-word;
`;

const Location = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            navigate(`/question1`)// simulate a delay
        }
    }, [loading]);

    useEffect(() =>{
        fetch(`${process.env.REACT_APP_SERVER_URL}/questions/locations`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setLocations(data.locations);
            });
    },[]);

    const handleClick = (location) => {
        dispatch(addLocation(location))
        setLoading(true);
        console.log(location)
}
    return (
        <Container>
            <Wrapper>
                <Title>
                    Bạn vui lòng chọn cơ sở đã trải nghiệm:
                </Title>
                <Content>
                        {locations.map((location) => {
                            return(
                            <Button onClick={() => handleClick(location)} key={location}>
                                {location}
                            </Button>
                        )})}
                </Content>
            </Wrapper>
        </Container>
    );
};

export default Location;