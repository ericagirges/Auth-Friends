import React, {useState} from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from 'react-router-dom';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 300px;
  margin-top: 40px;
`;

const StyledLabel = styled.label`
  font-family: "Rubik";
  font-size: 1.4rem;
`;

const StyledTitle = styled.h2`
  font-family: "Rubik";
  font-size: 1.8rem;
  text-align: center;
  color: #ECC607;
  font-weight: 600;
  text-decoration: black underline;
`;

const StyledInput = styled.input`
  margin-left: 20px;
  height: 25px;
  width: 200px;
  border-radius: 5px;
`;

const StyledInputAge = styled.input`
  margin-left: 37px;
  height: 25px;
  width: 200px;
  border-radius: 5px;
`;

const StyledSubmit = styled.button`
  border: 1px solid black;
  border-radius: 5px;
  background: #f5da16;
  font-family: "Rubik";
  font-size: 1.2rem;
  width: 100px;
  height: 30px;
  text-transform: uppercase;
  margin-top: 40px;
`;

const registerFriend = {
    name: "",
    age: "",
    email: ""
}

const FriendRegistration = () => {
    const [newFriend, setNewFriend] = useState(registerFriend);
    const history = useHistory();

    const handleChanges = (event) => {
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.value,
          });
      };

    
  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/friends", newFriend)
      .then((response) => {
        console.log(response)
        localStorage.setItem("token", response.data.payload);
        // alert("Friend added! Please login to view your friends list.")
        history.push("/login");
      })
      .catch((error) => {
        alert("Could not add a new friend at this time.")
      });
  };

  return(
      <div>
          <StyledTitle>
              Add a Friend
          </StyledTitle>
      <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>Name:
              <StyledInput type="text" name="name" value={newFriend.name} onChange={handleChanges}/>
          </StyledLabel>
          <StyledLabel>Age:
              <StyledInputAge type="text" name="age" value={newFriend.age} onChange={handleChanges}/>
          </StyledLabel>
          <StyledLabel>Email:
              <StyledInput type="email" name="email" value={newFriend.email} onChange={handleChanges}/>
          </StyledLabel>
          <StyledSubmit>Submit</StyledSubmit>
      </StyledForm>
      </div>
  )


}

export default FriendRegistration;
