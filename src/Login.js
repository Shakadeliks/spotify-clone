import React from 'react'
import styled from "styled-components";
import { loginUrl } from "./spotify";


const LoginContainer = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    background-color: black;
`

const Logo = styled.img`
    width: 100%;
`

const LoginBtn = styled.a`
    padding: 20px;
    background-color: #1db954;
    border-radius: 99px;
    font-weight: 800;
    color: white;
    text-decoration: none;
`

const Login = () => {
  return (
    <LoginContainer>
        <Logo 
            src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
            alt=""
        />
        <LoginBtn href={loginUrl}>LOGIN WITH SPOTIFY</LoginBtn>
    </LoginContainer>
  )
}

export default Login