import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import SiteLink from "../SiteLink/SiteLink";

const BaseNavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <SiteLink />
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default BaseNavBar;
