import { createMuiTheme } from "@material-ui/core/styles";
import { neutralColor, primaryColor } from "./colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#FFFFFF"
    },
    text: {
      primary: neutralColor
    }
  }
});

export default theme;
