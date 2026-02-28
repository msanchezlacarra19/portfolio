import { Box, Typography, Button, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: "8%",
        py: 0,
        overflow: "hidden",
        background: "linear-gradient(135deg, #E3F2FD, #E8F5E9)",
      }}
    >

      <Box sx={{ maxWidth: "50%" }}>
        <Typography variant="h2" fontWeight={700} mb={2}>
          {t("home.title")}
        </Typography>

        <Typography variant="h6" color="text.secondary" mb={4}>
          {t("home.subtitle")}
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            href="/portfolio/CV_FullStackDeveloper_MariaSanchez.pdf"
            target="_blank"
            className="boton-descargar"
          >
            {t("home.download")}
          </Button>

          {/*<Button variant="contained" color="success">
            Contacto
          </Button>*/}
        </Stack>
      </Box>
    </Box>
  );
};
