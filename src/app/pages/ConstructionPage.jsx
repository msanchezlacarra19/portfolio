import { Box, Typography, Button } from "@mui/material";

export const ConstructionPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
        background: "linear-gradient(135deg, #E3F2FD, #E8F5E9)",
      }}
    >
      <Typography variant="h4" fontWeight={700} mb={1}>
        Página en construcción
      </Typography>
      <img
        src="/portfolio/images/dinoTrabajando.png"
        alt="Dinosaurio trabajando"
        style={{ width: "260px", marginBottom: "1.5rem" }}
      />
      <Typography variant="body1" color="text.secondary" mb={4}>
        Estoy trabajando en esta sección. ¡Vuelve pronto!
      </Typography>

      <Button
        variant="outlined"
        className="boton-descargar"
        href="/#/main/home"
      >
        Volver al inicio
      </Button>
    </Box>
  );
};
