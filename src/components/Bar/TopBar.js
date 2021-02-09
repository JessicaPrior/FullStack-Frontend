import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import { goToFeed, goToLogin, goToAddAlbum, goToAlbum } from "../../routes/Coordinator";
import Button from "@material-ui/core/Button";
import { AppBarTitle, ButtonsContainer, LogoBar, LogOut, AppBarTitle1 } from "./styled";
import YpicStandardIcon from '../../assets/YpicStandardIcon.png'
import LogOutIcon from '../../assets/logoutIcon.png'

const TopBar = (props) => {
  const { setButtonName } = props;
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
          <Button color={"inherit"} onClick={() => goToAddAlbum(history)}>
            <AppBarTitle1 >Criar Album</AppBarTitle1>
          </Button>
          <Button color={"inherit"} onClick={() => goToAlbum(history)}>
            <AppBarTitle1 >Albuns</AppBarTitle1>
          </Button>
          <LogOut onClick={appBarAction} src={LogOutIcon} />
        </ButtonsContainer>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
