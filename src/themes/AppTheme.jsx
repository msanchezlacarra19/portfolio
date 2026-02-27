import { ThemeProvider } from '@emotion/react';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import { MainTheme } from '.';

export const AppTheme = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={MainTheme}>
        <CssBaseline />

        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}