import React from 'react';
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    color: grey;
    height: 40px;
    cursor: pointer;
    transition: 200ms color ease-in;

    
    &:hover{
        color: white;
    }
`

const TitleP = styled.p`
    margin-top: 10px;
    margin-left: 20px;
    font-size: 14px;
`;

const TitleH4 = styled.p``;


const SidebarOption = ({ title, Icon }) => {
  return (
    <Container>
        {Icon && <Icon style={{
            paddingRight: "10px",
            paddingLeft: "10px"
        }}/>}
        {Icon ? (<TitleH4>{title}</TitleH4>) : (<TitleP>{title}</TitleP>)}
    </Container>
  )
}

export default SidebarOption;