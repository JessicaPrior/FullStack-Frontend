import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import "./styled.css";

export const ButtonsContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
`;

export const LogoBar = styled.img`
  height: 6vh;
`;

export const AppBarTitle = styled(Typography)`
  padding-left: 16px;
  font-family: "Press Start 2P", cursive;
  font-size: 3vh;
  /* transition: all 0.5s;
  &:hover {
    border-radius: 10px;
    background-color: whitesmoke; */
`;
