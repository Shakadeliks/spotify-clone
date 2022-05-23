import React from 'react';
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import { useDataLayerValue } from './DataLayer';

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

`;

const Left = styled.div`
    background-color: white;
    color: gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    padding: 10px;
    flex: 0.5;
    min-width: 70px;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
`;

const Search = styled(SearchIcon)``;

const SearchInput = styled.input`
    border: none;
    width: 100%;

`;

const Username = styled.h4`
    margin-left: 10px;
`;

const UserProfilePic = styled(Avatar)``;


const Header = ({spotify }) => {

    const [{ user }] = useDataLayerValue();
    console.log(user)
  return (
    <Container>
        <Left>
            <Search className={"search"}/>
            <SearchInput 
                placeholder="Search for artists, Songs or Playlists"
                type="text"
            />
        </Left>
        <Right>
            <UserProfilePic classname={"avatar"} src ={user?.images[0]?.url} alt={user?.display_name} />
            <Username>{user?.display_name}</Username>
        </Right>
    </Container>
  )
}

export default Header;