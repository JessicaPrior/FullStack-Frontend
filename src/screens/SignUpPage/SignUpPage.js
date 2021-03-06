import React from "react";
import { ScreenContainer } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../hooks/useUnprotecdetPage";

const SignUpPage = (props) => {
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <SignUpForm setButtonName={props.setButtonName} />
    </ScreenContainer>
  );
};

export default SignUpPage;
