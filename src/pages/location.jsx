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

const mltShdSpin = keyframes`
  0% {
    box-shadow: 0 -0.83em 0 -0.4em,
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em,
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  5%,
  95% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    0 -0.83em 0 -0.42em, 0 -0.83em 0 -0.44em, 
    0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
  10%,
  59% {
    box-shadow: 0 -0.83em 0 -0.4em, 
    -0.087em -0.825em 0 -0.42em, -0.173em -0.812em 0 -0.44em, 
    -0.256em -0.789em 0 -0.46em, -0.297em -0.775em 0 -0.477em;
  }
  20% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.338em -0.758em 0 -0.42em,
     -0.555em -0.617em 0 -0.44em, -0.671em -0.488em 0 -0.46em, 
     -0.749em -0.34em 0 -0.477em;
  }
  38% {
    box-shadow: 0 -0.83em 0 -0.4em, -0.377em -0.74em 0 -0.42em,
     -0.645em -0.522em 0 -0.44em, -0.775em -0.297em 0 -0.46em, 
     -0.82em -0.09em 0 -0.477em;
  }
  100% {
    box-shadow: 0 -0.83em 0 -0.4em, 0 -0.83em 0 -0.42em, 
    0 -0.83em 0 -0.44em, 0 -0.83em 0 -0.46em, 0 -0.83em 0 -0.477em;
  }
`

const round = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

const Loader = styled.span`
  color: black;
  font-size: ${px2vw(40)};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  transform: translateZ(0);
  margin: ${px2vw(20)};
  animation: ${mltShdSpin} 1.7s infinite ease, ${round} 1.7s infinite ease;
`



const Location = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [locations, setLocations] = useState([]);
    const [apiCall, setApiCall] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (loading) {
            navigate(`/question1`)// simulate a delay
        }
    }, [loading]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_SERVER_URL}/questions/locations`, {
            method: "GET",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                setApiCall(true);
                setLocations(data.locations);
            });
    }, []);

    const handleClick = (location) => {
        dispatch(addLocation(location))
        setLoading(true);
        console.log(location)
    }
    return (
        <Container>
            <Wrapper>
                {!apiCall ?
                    <>
                        <Loader />
                        <Title>
                            Xin vui lòng chờ đợi
                        </Title>
                    </>
                    :
                    <>
                        <Title>
                            Bạn vui lòng chọn cơ sở đã trải nghiệm:
                        </Title>
                        <Content>
                            {locations.map((location, index) => {
                                index += 1;
                                return (
                                    <Button onClick={() => handleClick(location)} key={index}>
                                        {location}
                                    </Button>
                                )
                            })}
                        </Content>
                    </>
                }
            </Wrapper>
        </Container>
    );
};

export default Location;