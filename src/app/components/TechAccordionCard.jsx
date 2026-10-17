import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import { Box, Chip, Paper, Typography } from "@mui/material";

export const TechAccordionCard = ({
    id,
    title,
    subtitle,
    description,
    items = [],
    groups = [],
    details = [],
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
            className={`tech-card ${isOpen ? "tech-card--open" : ""}`}
        >
            <Box className="tech-card__head">
                <Box className="tech-card__summary">
                    {icon ? <Box className="tech-card__icon-wrap">{icon}</Box> : null}
                    <Box>
                        <Typography variant="h6" className="tech-card__title">
                            {title}
                        </Typography>
                        {subtitle ? (
                            <Typography variant="subtitle2" className="tech-card__subtitle">
                                {subtitle}
                            </Typography>
                        ) : null}
                    </Box>
                </Box>

                <ExpandMoreRoundedIcon className="tech-card__arrow" />
            </Box>

            <Box className={`tech-card__content ${isOpen ? "tech-card__content--open" : ""}`}>
                {description ? (
                    <Typography variant="body2" className="tech-card__description">
                        {description}
                    </Typography>
                ) : null}

                {groups.length > 0
                    ? groups.map((group) => (
                          <Box key={group.title} className="tech-card__group">
                              <Typography variant="subtitle2" className="tech-card__group-title">
                                  {group.title}
                              </Typography>
                              <Box className="tech-card__chips">
                                  {group.items.map((item) => (
                                      <Chip key={item} label={item} variant="outlined" className="tech-card__chip" />
                                  ))}
                              </Box>
                          </Box>
                      ))
                    : (
                        <Box className="tech-card__chips">
                            {items.map((item) => (
                                <Chip key={item} label={item} variant="outlined" className="tech-card__chip" />
                            ))}
                        </Box>
                    )}

                {details.length > 0 ? (
                    <Box className="tech-card__details">
                        {details.map((detail) => (
                            <Typography key={detail} variant="body2" className="tech-card__detail-item">
                                {detail}
                            </Typography>
                        ))}
                    </Box>
                ) : null}
            </Box>
        </Paper>
    );
};
