import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import styled from "styled-components";

const StyledContainer = styled.div `
    width: 100%;
    font-family: "Nanum Pen Script", sans-serif;
    font-size: 1.6rem;
    text-align: center;
`

const StyledTitle = styled.h2 `
    font-family: "Rubik";
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 20px;
    color: #D90505;
    font-weight: 600;
`

const FriendContainer = styled.div `
    border: 1px solid black;
    padding: 10px 0;

`

const FriendsList = () => {
    const [friends, setFriends] = useState([])

    useEffect(()=>{
        axiosWithAuth()
        .get('/api/friends')
        .then((response)=>{
            setFriends(response.data)
        })
        .catch((error)=>{
            console.log("error get", error)
        })
    }, [])
    return (
         <StyledContainer>
             <StyledTitle>
             Friends list
             </StyledTitle>
             {
                 friends.map((friend)=>{
                     return (
                     <FriendContainer>
                         <p>Name: {friend.name}</p>
                         <p>Age: {friend.age}</p>
                         <p>Email: {friend.email}</p>
                     </FriendContainer>
                     )
                 })
             }

         </StyledContainer>
    )
}

export default FriendsList
