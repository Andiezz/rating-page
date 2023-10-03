import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ImgSrc from '.././bg_tiin.png';
import ImgLogo from '.././logo_tiin2.png';
import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLocation, sendUser } from "../redux/answerSlice";


const Container = styled.div`
width: 100vw;
height: 100vh;
background-image: url(${ImgSrc});
background-size: cover;
display: flex;
align-items: center;
justify-content: center;
`;


const Wrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
height: 100%;
width: 100%;
`;


const Logo = styled.img`
height: 45px;
width: 60px;
margin: 30px;
margin-bottom: 50px;
`;

const Login = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 25rem;
width: 20rem;
border-radius: 20px;
border: 1px solid gray;
background-color: #eeeeee;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  margin: 10px 0px;
  padding: 10px;
  border: 0;
  border-bottom: 1px solid gray;
  background-color: transparent;
  &:focus{
    outline: none;
    border-bottom: 2px solid #565656;
  }
`;

const Error = styled.span`
  color: red;
`;

const Button = styled.button`
margin-top: 50px;
box-sizing: border-box;
border: 1.16446px solid #212121;
border-radius: 85.0059px;
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 16.3025px;
line-height: 20px;
letter-spacing: 0.05em;
text-transform: uppercase;
padding: 10px;
color: #212121;
cursor: pointer;
&:active{
    background-color: #bcbcbc;
}
`;

const Start = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useSelector((state) => state.location)

    useEffect(() => {

        console.log(location)
        if (location) navigate(`/question1`)
    }, [location])
    const handleClick = () => {
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify({
                username: username,
                password: password
            }
            )
        })
            .then((res) => res.json())
            .then((data) => {
                dispatch(addLocation(data.location));
                if (data.location) window.location.assign(`/question1`)
                else setError(true)
                console.log(data)
            });
    }

    const onChangeUsername = useCallback(
        (e) => {
            setUsername(e.target.value);
        }, [username])

    const onChangePassword = useCallback(
        (e) => {
            setPassword(e.target.value);
        }, [password])

    return (
        <Container>
            <Wrapper>
                <Login>
                    <Logo src={ImgLogo} />
                    <Form>
                        <Input
                            placeholder="username"
                            onChange={onChangeUsername}
                        />
                        <Input
                            placeholder="password"
                            type="password"
                            onChange={onChangePassword}
                        />
                        <Button type="submit" onClick={() => handleClick()} >
                            LOGIN
                        </Button>
                        {error && <Error>Username or Password is wrong</Error>}
                    </Form>
                </Login>

            </Wrapper>
        </Container>
    );
};

export default Start;