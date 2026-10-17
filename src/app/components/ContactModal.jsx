import {
  Modal,
  Box,
  Typography,
  Stack,
  Link,
  IconButton,
  Grid,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next";

export const ContactModal = ({ open, onClose }) => {
  const theme = useTheme();
  const modoOscuro = theme.palette.mode === "dark";
  const { t } = useTranslation();

  return (
    <Modal open={open} onClose={onClose}>
      <Box className="contact-modal__backdrop" onClick={onClose}>
        <Box
          className={`contact-modal ${modoOscuro ? "contact-modal--dark" : "contact-modal--light"}`}
          onClick={(event) => event.stopPropagation()}
        >
<Grid container sx={{ display:"flex", direction:"row", justifyContent:"space-between", alignItems:"center", mb: 2 }}>
  <Grid item sx={{ display:"flex", width: "90%" }}>
                    <Typography variant="body1" className="contact-modal__subtitle">
            {t("contactModal.subtitle")}
          </Typography>
          </Grid>
  <Grid item display="flex" justifyContent="flex-end">
          <IconButton
            onClick={onClose}
            aria-label={t("contactModal.closeAria")}
          >
            <CloseRoundedIcon fontSize="small" />
          </IconButton>
          </Grid>
</Grid>
          <Stack spacing={1.2}>
            <Link
              href="https://www.linkedin.com/in/maria-sanchez-lacarra/"
              target="_blank"
              rel="noreferrer"
              underline="none"
              className="contact-modal__link"
            >
              <LinkedInIcon fontSize="small" />
              {t("contactModal.linkedin")}
            </Link>

            <Link
              href="mailto:m.sanchezlacarra@gmail.com"
              underline="none"
              className="contact-modal__link"
            >
              <EmailRoundedIcon fontSize="small" />
              m.sanchezlacarra@gmail.com
            </Link>
          </Stack>
        </Box>
      </Box>
    </Modal>
  );
};
