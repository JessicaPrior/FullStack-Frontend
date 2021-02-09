import React from "react";
import Button from "@material-ui/core/Button";
import { ScreenContainer, SignUpButtonContainer } from "./styled";
import LoginForm from "./LoginForm";
import { useHistory } from "react-router-dom";
import { goToSignUp } from "../../routes/Coordinator";
import useUnprotectedPage from "../../hooks/useUnprotecdetPage";

const LoginPage = (props) => {
  const history = useHistory();
  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LoginForm setButtonName={props.setButtonName} />
      <SignUpButtonContainer>
        <Button
          onClick={() => goToSignUp(history)}
          color={"primary"}
          variant={"text"}
          type={"submit"}
          fullWidth
        >
          Não possui um cadastro? Clique aqui!
        </Button>
      </SignUpButtonContainer>
    </ScreenContainer>
  );
};

export default LoginPage;
