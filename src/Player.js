import React from 'react';
import styled from "styled-components"; 
import Body from './Body';
import Sidebar from './Sidebar';
import Footer from './Footer';


const Container = styled.div``

const Wrapper = styled.div`
    display: flex;
`

const Player = ({spotify}) => {

  return (
    <Container>
        <Wrapper>
              <Sidebar />
              <Body spotify={spotify}/>
        </Wrapper>
        
        <Footer spotify={spotify}/>  
    </Container>
  )
}

export default Player;