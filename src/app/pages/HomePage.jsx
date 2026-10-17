import { Box, Paper, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LayoutApp } from "../layout/LayoutApp";
import { useState } from "react";
import { ContactModal } from "../components/ContactModal";
import { useTheme } from "@mui/material/styles";

export const HomePage = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const modoOscuro = theme.palette.mode === "dark";
  const [openContact, setOpenContact] = useState(false);

  return (
    <LayoutApp>
      {/* Contenedor principal que fuerza la disposición en columna y los alinea al centro */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%"
        }}
      >

        {/* SECCIÓN 1: HERO (Inicio) */}
        <Box
          id="home"
          className={`home-hero ${modoOscuro ? "home-hero--dark" : "home-hero--light"}`}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "80vh",
            width: "100%",
            boxSizing: "border-box"
          }}
        >
          <Box className="home-hero__content home-hero__card">
            <Typography className="home-hero__name" variant="h2">
              <span className="home-hero__presentation">{t("home.presentation")}</span>
              <span className="home-hero__name-highlight">{t("home.name")}</span>
            </Typography>

            <Typography className="home-hero__description" variant="body1">
              {t("home.summary")}
            </Typography>

            <Stack direction={{ xs: "column", sm: "row" }} spacing={2.2} className="home-hero__actions">
              <Button
                variant="contained"
                href="/portfolio/CV María Sánchez.pdf"
                target="_blank"
                rel="noreferrer"
                className="home-btn home-btn--primary"
              >
                {t("home.download")}
              </Button>

              <Button
                variant="outlined"
                onClick={() => setOpenContact(true)}
                className="home-btn home-btn--secondary"
              >
                {t("home.contact")}
              </Button>
            </Stack>
          </Box>
        </Box>

        {/* SECCIÓN 2: SOBRE MÍ */}
        <Box
          id="about"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "80vh",
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto",
            p: "4rem 1rem",
            zIndex: 1,
            position: "relative",
            boxSizing: "border-box"
          }}
        >
          <Box sx={{ width: "min(860px, 100%)", pt: "0.3rem", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: modoOscuro ? "#ff93dc" : "#a14170"
              }}
            >
              {t("about.headerKicker")}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "65%" } }}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
              </Paper>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "35%" }, display: "flex", justifyContent: "center" }}>
              <img
                alt={t("about.imageAlt")}
                src="/portfolio/images/profileImage.png"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  display: "block"
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* SECCIÓN 3: FORMACIÓN */}
        {/*<Box
          id="about"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "80vh",
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto",
            p: "4rem 1rem",
            zIndex: 1,
            position: "relative",
            boxSizing: "border-box"
          }}
        >
          <Box sx={{ width: "min(860px, 100%)", pt: "0.3rem", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: modoOscuro ? "#ff93dc" : "#a14170"
              }}
            >
              {t("about.headerKicker")}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "65%" } }}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
              </Paper>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "35%" }, display: "flex", justifyContent: "center" }}>
              <img
                alt={t("about.imageAlt")}
                src="/portfolio/images/profileImage.png"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  display: "block"
                }}
              />
            </Box>
          </Box>
        </Box>*/}

        {/* SECCIÓN 4: EXPERIENCIA */}
        {/*<Box
          id="about"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minHeight: "80vh",
            width: "100%",
            maxWidth: "1080px",
            margin: "0 auto",
            p: "4rem 1rem",
            zIndex: 1,
            position: "relative",
            boxSizing: "border-box"
          }}
        >
          <Box sx={{ width: "min(860px, 100%)", pt: "0.3rem", mb: 3 }}>
            <Typography
              sx={{
                fontSize: "1rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: 700,
                color: modoOscuro ? "#ff93dc" : "#a14170"
              }}
            >
              {t("about.headerKicker")}
            </Typography>
          </Box>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: { xs: 4, md: 5 },
            }}
          >
            <Box sx={{ width: { xs: "100%", md: "65%" } }}>
              <Paper sx={{ p: 3 }} elevation={2}>
                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p1") }} />
                <Typography variant="body1" sx={{ lineHeight: 1.7 }} dangerouslySetInnerHTML={{ __html: t("about.p2") }} />
              </Paper>
            </Box>

            <Box sx={{ width: { xs: "100%", md: "35%" }, display: "flex", justifyContent: "center" }}>
              <img
                alt={t("about.imageAlt")}
                src="/portfolio/images/profileImage.png"
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  height: "auto",
                  display: "block"
                }}
              />
            </Box>
          </Box>
        </Box>*/}


      </Box>


      <ContactModal open={openContact} onClose={() => setOpenContact(false)} />
    </LayoutApp>
  );
};
