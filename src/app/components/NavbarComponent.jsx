import {
    AppBar,
    Toolbar,
    Button,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemButton
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import "../../style/navbar.css";

export const NavbarComponent = ({ modoOscuro, setModoOscuro }) => {
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { i18n, t } = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const locationRef = useRef(location);
    const navigateRef = useRef(navigate);
    locationRef.current = location;
    navigateRef.current = navigate;

    const links = [
        { label: t("navbar.e1"), path: "/main/home", section: "home" },
        { label: t("navbar.e2"), path: "/main/home", section: "about" },
        { label: t("navbar.e4"), path: "/main/education" },
    ];

    const currentLanguage = (i18n.resolvedLanguage || i18n.language).startsWith("en") ? "en" : "es";
    const languageCode = currentLanguage === "es" ? "🇬🇧" : "🇪🇸";
    const toggleLanguage = () => i18n.changeLanguage(currentLanguage === "es" ? "en" : "es");

    const isActive = (link) => {
        if (link.section) {
            return location.pathname === link.path && activeSection === link.section;
        }

        return location.pathname === link.path;
    };

    const navbarModeClass = modoOscuro ? "navbar--dark" : "navbar--light";
    const navLinkModeClass = modoOscuro ? "navbar-link--dark" : "navbar-link--light";
    const languageButtonModeClass = modoOscuro ? "navbar__language-button--dark" : "navbar__language-button--light";
    const mobileIconModeClass = modoOscuro ? "navbar__mobile-icon--dark" : "navbar__mobile-icon--light";
    const drawerModeClass = modoOscuro ? "navbar__drawer-paper--dark" : "navbar__drawer-paper--light";
    const drawerLinkModeClass = modoOscuro ? "navbar__drawer-link--dark" : "navbar__drawer-link--light";
    const closeDrawer = () => setOpen(false);

    useEffect(() => {
        if (location.pathname !== "/main/home") {
            return undefined;
        }

        const sectionIds = ["home", "about"];
        let frame = 0;
        let initialFrame = 0;

        const updateActiveSection = () => {
            frame = 0;
            const sections = sectionIds
                .map(id => document.getElementById(id))
                .filter(Boolean);
            if (sections.length === 0) return;

            const activationLine = window.innerHeight * 0.35;
            const currentSection = sections
                .filter(section => section.getBoundingClientRect().top <= activationLine)
                .slice(-1)[0] || sections[0];
            const sectionId = currentSection.id;
            const currentLocation = locationRef.current;

            setActiveSection(sectionId);

            if (currentLocation.hash !== `#${sectionId}`) {
                navigateRef.current(
                    { pathname: currentLocation.pathname, hash: `#${sectionId}` },
                    { replace: true, state: currentLocation.state },
                );
            }
        };

        const scheduleUpdate = () => {
            if (!frame) {
                frame = requestAnimationFrame(updateActiveSection);
            }
        };
        const hasSectionHash = sectionIds.includes(location.hash.slice(1));

        window.addEventListener("scroll", scheduleUpdate, { passive: true });
        window.addEventListener("resize", scheduleUpdate);

        if (!hasSectionHash) {
            initialFrame = requestAnimationFrame(updateActiveSection);
        }

        return () => {
            window.removeEventListener("scroll", scheduleUpdate);
            window.removeEventListener("resize", scheduleUpdate);
            cancelAnimationFrame(frame);
            cancelAnimationFrame(initialFrame);
        };
    }, [location.pathname]);

    useEffect(() => {
        const targetId = location.pathname === "/main/home"
            ? location.hash.slice(1) || "home"
            : null;

        if (targetId) {
            setActiveSection(targetId);
        }

        const frame = requestAnimationFrame(() => {
            if (targetId) {
                document.getElementById(targetId)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        });

        return () => cancelAnimationFrame(frame);
    }, [location.pathname]);

    const navigateTo = (link) => {
        if (location.pathname === link.path && (!link.section || location.hash === `#${link.section}`)) {
            if (link.section) {
                document.getElementById(link.section)?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
            closeDrawer();
            return;
        }

        if (location.pathname === link.path && link.section) {
            setActiveSection(link.section);
            navigate({
                pathname: link.path,
                hash: `#${link.section}`,
            });
            document.getElementById(link.section)?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            closeDrawer();
            return;
        }

        navigate({
            pathname: link.path,
            hash: link.section ? `#${link.section}` : "",
        });
        closeDrawer();
    };

    return (
        <>
            <AppBar
                className={`navbar ${navbarModeClass}`}
                position="fixed"
                elevation={0}
            >
                <Toolbar className="toolbar-navbar">
                    {/* Enlaces desktop */}
                    <Box className="navbar-links">
                        {links.map(link => (
                            <Button
                                key={`${link.path}-${link.section || ""}`}
                                onClick={() => navigateTo(link)}
                                className={`navbar-link ${navLinkModeClass} ${isActive(link) ? "navbar-link--active" : ""}`}
                            >
                                {link.label}
                            </Button>
                        ))}
                    </Box>
                    <Box className="navbar__actions">
                        <Box className="navbar-configuration">
                            <IconButton
                                className={`navbar__language-button ${languageButtonModeClass}`}
                                onClick={toggleLanguage}
                                aria-label={currentLanguage === "es" ? "Switch language to English" : "Cambiar idioma a español"}
                                title={currentLanguage === "es" ? "Change language to Spanish" : "Cambia el idioma a inglés"}
                            >
                                {languageCode}
                            </IconButton>

                            <IconButton
                                className={`navbar__theme-button ${modoOscuro ? "navbar__theme-button--dark" : "navbar__theme-button--light"}`}
                                onClick={() => setModoOscuro(!modoOscuro)}
                                aria-label={modoOscuro ? "Cambiar a modo claro" : "Switch to dark mode"}
                                title={modoOscuro ? "Modo claro" : "Dark mode"}
                            >
                                {modoOscuro ? <LightModeIcon /> : <DarkModeIcon />}
                            </IconButton>
                        </Box>
                        <IconButton
                            className="navbar__mobile-toggle"
                            onClick={() => setOpen(isOpen => !isOpen)}
                            aria-label={open ? "Cerrar menú" : "Abrir menú"}
                            aria-expanded={open}
                            aria-controls="navbar-mobile-drawer"
                        >
                            {open
                                ? <CloseIcon className={`navbar__mobile-icon ${mobileIconModeClass}`} />
                                : <MenuIcon className={`navbar__mobile-icon ${mobileIconModeClass}`} />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer móvil */}
            <Drawer
                anchor="right"
                open={open}
                onClose={closeDrawer}
                PaperProps={{ className: `navbar__drawer-paper ${drawerModeClass}` }}
            >
                <List id="navbar-mobile-drawer" className="navbar__drawer-list">
                    <ListItem className="navbar__drawer-close-row" disablePadding>
                        <IconButton
                            className={`navbar__drawer-close ${drawerLinkModeClass}`}
                            onClick={closeDrawer}
                            aria-label="Cerrar menú"
                        >
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                    {links.map(link => (
                        <ListItem key={`${link.path}-${link.section || ""}`} disablePadding>
                            <ListItemButton
                                className={`navbar__drawer-link ${drawerLinkModeClass} ${isActive(link) ? "navbar__drawer-link--active" : ""}`}
                                onClick={() => navigateTo(link)}
                            >
                                {link.label}
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        </>
    );
};
