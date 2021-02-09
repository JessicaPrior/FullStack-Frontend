import React from "react";
import Animated404 from "../../assets/Animated404.gif";
import Typography from "@material-ui/core/Typography";
import { AnimatedError, ErrorPageContainer } from "./styled";

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <AnimatedError alt={"Erro404"} src={Animated404} />
      <Typography color={"primary"} variant={"h4"} align={"center"}>
        Erro 404 - Página Não Encontrada
      </Typography>
    </ErrorPageContainer>
  );
};

export default ErrorPage;
