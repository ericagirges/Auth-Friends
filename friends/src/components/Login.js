import React from "react";
import styled from "styled-components";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 300px;
    margin-top: 40px;
`

const StyledLabel = styled.label `
    font-family: "Rubik";
    font-size: 1.4rem;
`

const StyledInput = styled.input `
    margin-left: 20px;
    height: 25px;
    width: 200px;
    border-radius: 5px;
`

const StyledSubmit = styled.button `
    border: 1px solid  black;
    border-radius: 5px;
    background: #F5DA16;
    font-family: "Rubik";
    font-size: 1.2rem;
    width: 100px;
    height: 30px;
    text-transform: uppercase;
    margin-top: 40px;
`

class Login extends React.Component{
    state = {
        credentials: {
          username: "",
          password: ""
        },
        error: ""
      };
    
      handleChange = (event) => {
        this.setState({
          credentials: {
            ...this.state.credentials,
            [event.target.name]: event.target.value
          },
          error: ""
        });
      };
    
      login = (event) => {
        event.preventDefault();
        axiosWithAuth()
          .post("/api/login", this.state.credentials)
          .then((response) => {
            localStorage.setItem("token", response.data.payload);
            this.props.history.push("/protected");
          })
          .catch((error) => {
            this.setState({
              error: error.response.data.error
            });
          });
      };
    
      render() {
        return (
          <div>
            <StyledForm onSubmit={this.login}>
                <StyledLabel>Username:
              <StyledInput
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
              />
              </StyledLabel>
              <StyledLabel>Password:
              <StyledInput
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
              </StyledLabel>
              <StyledSubmit>Submit</StyledSubmit>
            </StyledForm>
            <p style={{ color: "#D90505" }}>{this.state.error}</p>
          </div>
        );
      }
    }
    
    export default Login;
