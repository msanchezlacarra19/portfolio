import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Paper, Typography } from "@mui/material";

export const AccordionCard = ({
    id,
    title,
    center,
    date,
    description,
    icon,
    isOpen,
    onToggle,
}) => {
    const handleToggle = () => {
        onToggle(id);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleToggle();
        }
    };

    return (
        <Paper
            elevation={0}
            role="button"
            tabIndex={0}
            onClick={handleToggle}
            onKeyDown={handleKeyDown}
            className={`education-card ${isOpen ? "education-card--open" : ""}`}
        >
            <Box className="education-card__head">
                <Box className="education-card__summary">
                    {icon ? <Box className="education-card__icon-wrap">{icon}</Box> : null}
                    <Box>
                        <Typography variant="h6" className="education-card__title">
                            {title}
                        </Typography>
                        <Typography variant="subtitle2" className="education-card__period">
                            {center}
                            {date ? ` - ${date}` : ""}
                        </Typography>
                    </Box>
                </Box>

                <ExpandMoreRoundedIcon className="education-card__arrow" />
            </Box>

            <Box className={`education-card__content ${isOpen ? "education-card__content--open" : ""}`}>
                <Typography variant="body1" className="education-card__description">
                    {description}
                </Typography>
            </Box>
        </Paper>
    );
};