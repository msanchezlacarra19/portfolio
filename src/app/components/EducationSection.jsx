import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import { Stack } from "@mui/material";
import { useState } from "react";
import { AccordionCard } from "./AccordionCard";

const splitCenterAndDate = (period = "") => {
    const parts = period.split("—");

    if (parts.length < 2) {
        return {
            center: period.trim(),
            date: "",
        };
    }

    return {
        center: parts[0].trim(),
        date: parts.slice(1).join("—").trim(),
    };
};

export const EducationSection = ({ educationItems }) => {
    const [openId, setOpenId] = useState(null);

    const handleToggle = (id) => {
        setOpenId((currentId) => (currentId === id ? null : id));
    };

    return (
        <Stack className="education-page__grid" spacing={2.2}>
            {educationItems.map((item) => {
                const { center, date } = splitCenterAndDate(item.period);

                return (
                    <AccordionCard
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        center={center}
                        date={date}
                        description={item.description}
                        icon={<SchoolRoundedIcon className="education-card__icon" />}
                        isOpen={openId === item.id}
                        onToggle={handleToggle}
                    />
                );
            })}
        </Stack>
    );
};