import { Box, Typography, Button, Grid, Paper } from "@mui/material";
import { useTranslation } from "react-i18next";
import { LayoutApp } from "../layout/LayoutApp";

export const ConstructionPage = () => {
  const { t } = useTranslation();
  return (
    <LayoutApp center={true}>
      <Paper sx={{ p: { xs: 2, sm: 3 }, width: "min(620px, 92%)", textAlign: "center" }} elevation={0}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center" }}
        >
          <Grid item>
            <Typography variant="h4" fontWeight={700} mb={1}>
              {t("construction.title")}
            </Typography>
          </Grid>

          <Grid item>
            <img
              src="/portfolio/images/dinoTrabajando.png"
              alt="Dinosaurio trabajando"
              style={{ width: "260px", marginBottom: "1.5rem" }}
            />
          </Grid>

          <Grid item>
            <Typography variant="body1" color="text.secondary" mb={4}>
              {t("construction.subtitle")}
            </Typography>
          </Grid>

          <Grid item>
            <Button
              variant="outlined"
              className="boton-descargar"
              href="/portfolio/#/main/home"
            >
              {t("construction.button")}
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </LayoutApp>
  );
};
