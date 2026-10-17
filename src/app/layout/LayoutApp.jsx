import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../../style/home.css";

export const LayoutApp = ({ children, center = false }) => {
  const theme = useTheme();
  const modoOscuro = theme.palette.mode === "dark";
  const location = useLocation();
  const allowPageScroll =
    location.pathname.includes("/main/skills") ||
    location.pathname.includes("/main/home");

  useEffect(() => {
    document.documentElement.style.overflowY = allowPageScroll ? "auto" : "hidden";
    document.body.style.overflowY = allowPageScroll ? "auto" : "hidden";

    return () => {
      document.documentElement.style.overflowY = "auto";
      document.body.style.overflowY = "auto";
    };
  }, [allowPageScroll]);

  return (
    <Box
      className={`layout-shell ${modoOscuro ? "layout-shell--dark" : "layout-shell--light"}`}
      sx={{
        minHeight: { xs: "calc(100vh - 64px)", md: "calc(100vh - 74px)" },
        display: "flex",
        alignItems: "center",
        justifyContent: center ? "center" : "flex-start",
        px: center ? 0 : "8%",
        position: "relative",
        zIndex: 1,
        background: "transparent",
      }}
    >
      <Box
        className={`home-scene ${modoOscuro ? "home-scene--dark" : "home-scene--light"}`}
        aria-hidden="true"
      />
      {children}
    </Box>
  );
};
