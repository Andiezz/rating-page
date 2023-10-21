import styled, { keyframes } from "styled-components";
import { slideInUp } from "react-animations";
import { mobile, px2vw } from "../responsive";
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
 font-size: ${px2vw(50)};
 animation: 2s ${logoAnimation};
`;

const buttonAnimation = keyframes`${fadeIn}`;

const Button = styled.button`
margin-top: ${px2vw(112)};
box-sizing: border-box;
border: ${px2vw(1)} solid #212121;
border-radius: ${px2vw(85)};
font-family: 'Inter';
font-style: normal;
font-weight: ${px2vw(400)};
font-size: ${px2vw(16)};
/* identical to box height */
text-transform: uppercase;
padding: ${px2vw(10)};
margin: ${px2vw(10)};
color: #212121;
 cursor: pointer;
/* &:active{
    background-color: #a9a9a9;
} */
`;

const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    justify-content: center;
    margin-top: ${px2vw(50)};

`
const Title = styled.a`
    font-size: ${px2vw(40)};
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
        console.log(`${process.env.REACT_APP_SERVER_URL}/questions/locations`);
        fetch(`${process.env.REACT_APP_SERVER_URL}/questions/locations`, {
            mode: 'no-cors',
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
                        {locations.map((location, index) => {
                            index += 1;
                            return(
                            <Button onClick={() => handleClick(location)} key={index}>
                                {location}
                            </Button>
                        )})}
                </Content>
            </Wrapper>
        </Container>
    );
};

export default Location;