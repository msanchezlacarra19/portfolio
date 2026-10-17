import {
    Box,
    Typography
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { LayoutApp } from "../layout/LayoutApp";
import { useTranslation } from "react-i18next";
import { EducationSection } from "../components/EducationSection";
import "../../style/education.css";

export const EducationPage = () => {
    const theme = useTheme();
    const modoOscuro = theme.palette.mode === "dark";
    const { t } = useTranslation();

    const educationItems = [
        {
            id: 1,
            title: t("education.items.daw.title"),
            period: t("education.items.daw.period"),
            description: t("education.items.daw.description"),
        },
        {
            id: 2,
            title: t("education.items.highSchool.title"),
            period: t("education.items.highSchool.period"),
            description: t("education.items.highSchool.description"),
        },
    ];

    return (
        <LayoutApp>
            <Box className={`education-page ${modoOscuro ? "education-page--dark" : "education-page--light"}`}>
                <Box className="education-page__header">
                    <Typography className="education-page__kicker">{t("education.headerKicker")}</Typography>
                </Box>

                <EducationSection educationItems={educationItems} />
            </Box>
        </LayoutApp>
    );
};
