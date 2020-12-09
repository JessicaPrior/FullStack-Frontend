import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import TopBar from "./components/Bar/TopBar";
import styled from "styled-components";

const InnerScreenContainer = styled.div`
  padding-top: 64px;
`;

export default function App() {
  const token = localStorage.getItem("token");
  const [buttonName, setButtonName] = useState(token ? "Logout" : "Login");

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <TopBar buttonName={buttonName} setButtonName={setButtonName} />
        <InnerScreenContainer>
          <Router setButtonName={setButtonName} />
        </InnerScreenContainer>
      </BrowserRouter>
    </ThemeProvider>
  );
}
