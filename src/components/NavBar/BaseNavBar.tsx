import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


const BaseNavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 0 }}>

      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Typography variant="h5" component="h1" sx={{ flexGrow: 1, textTransform: "uppercase" }}>
            <Typography variant="h5" component="span" color="primary">
              {`>_ `}
            </Typography>
            <Typography variant="h5" component="span" >
              {`Nexum`}
            </Typography>
            <Typography variant="h5" component="span" color="primary">
              {`Labs`}
            </Typography>
          </Typography>
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
}

export default BaseNavBar;
