import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/Coordinator";
import Button from "@material-ui/core/Button";
import { AppBarTitle, ButtonsContainer, LogoBar } from "./styled";
import YpicStandardIcon from '../../assets/YpicStandardIcon.png'
import Typography from "@material-ui/core/Typography";

const TopBar = (props) => {
  const { buttonName, setButtonName } = props;
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token");
    setButtonName("Login");
  };

  const appBarAction = () => {
    const token = localStorage.getItem("token");
    if (token) {
      logout();
    }
    goToLogin(history);
  };

  return (
    <AppBar>
      <Toolbar>
        <ButtonsContainer>
          <Button color={"inherit"} onClick={() => goToFeed(history)}>
            <LogoBar alt={"logo"} src={YpicStandardIcon} />
            <AppBarTitle variant={"h6"}>Ypic</AppBarTitle>
          </Button>
          <Button color={"inherit"} onClick={appBarAction}>
            <Typography variant={"h6"}>{buttonName}</Typography>
          </Button>
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
