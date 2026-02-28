import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, Select, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const NavbarComponent = () => {
    const [open, setOpen] = useState(false);
    const { i18n } = useTranslation();

    const links = [
        { label: "Home", href: "/#/main/home" },
        { label: "Sobre mí", href: "/#/main/about" },
        { label: "Habilidades", href: "/#/main/skills" },
        { label: "Formación", href: "/#/main/education" },
        { label: "Experiencia", href: "/#/main/experience" },
    ];

    return (
        <>
            <AppBar
                position="static"
                elevation={0}
                sx={{
                    background: "linear-gradient(135deg, #E3F2FD, #E8F5E9)",
                    boxShadow: "none"
                }}
            >
                <Toolbar sx={{ display: "flex", justifyContent: "end", gap: 2 }}>

                    {/* Enlaces desktop */}
                    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
                        {links.map(link => (
                            <Button key={link.label} href={link.href} sx={{ color: "#212121" }}>
                                {link.label}
                            </Button>
                        ))}
                    </Box>

                    {/* Selector de idioma */}
                    <Select
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        size="small"
                        sx={{
                            display: { xs: "none", md: "block" },
                            ml: 3, /* ← separación del menú */
                            color: "#212121",
                            borderColor: "#212121",
                            ".MuiOutlinedInput-notchedOutline": { borderColor: "#212121" },
                            "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#212121" },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#212121" }
                        }}
                    >
                        <MenuItem value="es">🇪🇸 Español</MenuItem>
                        <MenuItem value="en">🇬🇧 English</MenuItem>
                    </Select>


                    {/* Menú móvil */}
                    <IconButton
                        sx={{ display: { xs: "block", md: "none" } }}
                        onClick={() => setOpen(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>

            {/* Drawer móvil */}
            <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
                <List sx={{ width: 220 }}>
                    {links.map(link => (
                        <ListItem key={link.label}>
                            <ListItemButton href={link.href}>
                                {link.label}
                            </ListItemButton>
                        </ListItem>
                    ))}

                    {/* Selector de idioma en móvil */}
                    <ListItem>
                        <Select
                            fullWidth
                            value={i18n.language}
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                        >
                            <MenuItem value="es">🇪🇸 Español</MenuItem>
                            <MenuItem value="en">🇬🇧 English</MenuItem>
                        </Select>
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
};
