import React, { useState } from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

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
  color: #0ec2ee;
  font-weight: 600;
  text-decoration: black underline;
`;

const StyledInput = styled.input`
  margin-left: 20px;
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

// const StyledLoader = styled.div `
//     text-align: center;
//     width: 100%;
// `


const userLogin = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [credentials, setCredentials] = useState(userLogin);
  const history = useHistory();

  const handleChanges = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axiosWithAuth()
      .post("/api/login", credentials)
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.payload);
        history.push("/friendslist");
      })
      .catch((error) => {
        alert("Login failed.");
      });
  };

  return (
    <div>
      <StyledTitle>Login</StyledTitle>
      {/* {isLoading && (
          <StyledLoader className="key spinner">
            <Loader type="ThreeDots" color="#0EC2EE" height="60" width="60" timeout={3000}/>
          </StyledLoader>
        )} */}
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          Username:
          <StyledInput
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChanges}
          />
        </StyledLabel>
        <StyledLabel>
          Password:
          <StyledInput
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChanges}
          />
        </StyledLabel>
        <StyledSubmit>Submit</StyledSubmit>
      </StyledForm>
    </div>
  );
};

export default Login;
