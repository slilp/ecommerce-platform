import React from "react";
import styled from "styled-components";
import {
  FacebookLoginButton,
  GoogleLoginButton,
} from "react-social-login-buttons";

const SocialBtnSpan = styled.a`
  font-size: 1rem;
  display: block;
  height: 100%;
  width: 100%;
  color:white;
  &:hover{
    color: white !important;
  }
`;

function SocialBtn(props) {
  return (
    <>
      {props.channel == "google" && (
        <GoogleLoginButton
          align={"center"}
          onClick={() => alert("Hello")}
          size={40}
        >
          <SocialBtnSpan className="kanit-font">{props.label}</SocialBtnSpan>
        </GoogleLoginButton>
      )}
      {props.channel == "facebook" && (
        <FacebookLoginButton  align={"center"} size={40}>
          <SocialBtnSpan href={props.url} className="kanit-font">{props.label}</SocialBtnSpan>
        </FacebookLoginButton>
      )}
    </>
  );
}

export default SocialBtn;
