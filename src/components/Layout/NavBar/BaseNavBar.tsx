"use client";

import { useState, type ReactNode } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import SiteLink from "../SiteLink/SiteLink";

const DRAWER_WIDTH = 280;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "How We Work", href: "/how-we-work" },
  // { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

type BaseNavBarProps = {
  children?: ReactNode;
};

const BaseNavBar: React.FC<BaseNavBarProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleToggle}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <SiteLink />
        </Toolbar>
      </AppBar>

      <Box sx={{ display: "flex" }}>
        <Drawer
          anchor="left"
          variant={isDesktop ? "persistent" : "temporary"}
          open={open}
          onClose={handleClose}
          ModalProps={{ keepMounted: true }}
          sx={{
            width: isDesktop ? DRAWER_WIDTH : 0,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: isDesktop ? DRAWER_WIDTH : "100%",
              boxSizing: "border-box",
            },
          }}
        >
          <NavDrawerContent onNavigate={handleClose} />
        </Drawer>

        <Box
          component="div"
          sx={{
            flexGrow: 1,
            minWidth: 0,
            transition: theme.transitions.create("margin", {
              easing: open
                ? theme.transitions.easing.easeOut
                : theme.transitions.easing.sharp,
              duration: open
                ? theme.transitions.duration.enteringScreen
                : theme.transitions.duration.leavingScreen,
            }),
            marginLeft:
              isDesktop && open ? 0 : isDesktop ? `-${DRAWER_WIDTH}px` : 0,
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

const NavDrawerContent: React.FC<{ onNavigate: () => void }> = ({
  onNavigate,
}) => {
  const pathname = usePathname();

  return (
    <Box
      sx={{
        width: { xs: "100%", md: DRAWER_WIDTH },
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <SiteLink sx={{ fontSize: "1.5rem" }} />
        <IconButton onClick={onNavigate} aria-label="close menu">
          <CloseIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List>
        {NAV_LINKS.map((link, index) => (
          <ListItem key={link.href} disablePadding>
            <ListItemButton
              component={NextLink}
              href={link.href}
              selected={pathname === link.href}
              onClick={onNavigate}
              sx={{
                transition: "transform 0.15s ease, color 0.15s ease",
                "&:hover": {
                  color: "secondary.main",
                  transform: `${index % 2 === 0 ? "rotate(1.6deg)" : "rotate(-1.6deg)"}`,
                },
                "&.Mui-selected": {
                  color: "secondary.main",
                  transform: `${index % 2 === 0 ? "rotate(1.6deg)" : "rotate(-1.6deg)"}`,
                },
              }}
            >
              <ListItemText
                primary={link.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontFamily: "JetBrains Mono",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ marginTop: "auto", padding: "1rem" }}>
        <Divider sx={{ marginBottom: "1rem" }} />
        <Link href="mailto:hello@nexumlabs.co.uk" color="secondary">
          hello@nexumlabs.co.uk
        </Link>
      </Box>
    </Box>
  );
};

export default BaseNavBar;
