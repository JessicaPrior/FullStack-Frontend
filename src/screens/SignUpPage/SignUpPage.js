import React from "react";
import YpicStandardImage from "../../assets/YpicStandardIcon.png";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotecdetPage";
import { LogoImage } from "./styled";

const SignUpPage = (props) => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      {/* <LogoImage alt={"logo"} src={YpicStandardImage} /> */}
      <SignUpForm setButtonName={props.setButtonName} />
    </ScreenContainer>
  );
};

export default SignUpPage;
