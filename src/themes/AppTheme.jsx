import { Box } from "@mui/material";
import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { NavbarComponent } from "../app/components/NavbarComponent";

export const AppTheme = ({ children }) => {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <ThemeProvider theme={modoOscuro ? darkTheme : lightTheme}>
      <CssBaseline />
      <NavbarComponent modoOscuro={modoOscuro} setModoOscuro={setModoOscuro} />
      <Box className="navbar-spacer" aria-hidden="true" />
      {children}
    </ThemeProvider>
  );
}
