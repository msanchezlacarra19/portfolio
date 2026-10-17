import { Stack } from "@mui/material";
import { useState } from "react";
import { TechAccordionCard } from "./TechAccordionCard";

export const TechSection = ({ techData }) => {
    const [openId, setOpenId] = useState(techData?.[0]?.id ?? null);

    const handleToggle = (id) => {
        setOpenId((currentId) => (currentId === id ? null : id));
    };

    return (
        <Stack className="tech-page__grid" spacing={2.2}>
            {techData.map((section) => (
                <TechAccordionCard
                    key={section.id}
                    id={section.id}
                    title={section.title}
                    subtitle={section.subtitle}
                    description={section.description}
                    items={section.items}
                    groups={section.groups}
                    details={section.details}
                    icon={section.icon}
                    isOpen={openId === section.id}
                    onToggle={handleToggle}
                />
            ))}
        </Stack>
    );
};
