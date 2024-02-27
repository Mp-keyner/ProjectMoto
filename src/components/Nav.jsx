import {
  AppBar,
  Box,
  Button,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ImgLogo from "../assets/yamaha.svg";
import SearchIcon from "@mui/icons-material/Search";

const Nav = () => {
  return (
    <>
      <AppBar
        position="static"
        color="tertiary"
        sx={{
          padding: "0 1.5pc",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            height: "4.5pc",
          }}
        >
          {/* <Stack
            direction="row"
            alignItems="center"
            sx={{
              justifyContent: "space-between",
              background: "#2626",
            }}
          >
            <Button color="inherit">Login</Button>
            <Typography variant="h6" component="div" sx={{ background: "red" }}>
              News
            </Typography>
          </Stack> */}
          <Box component="img" src={ImgLogo} width="9pc" draggable={false} />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, background: "red" }}
          >
            <MenuIcon />
          </IconButton> */}
          <Stack direction="row" alignItems="center" gap="2pc">
            <Stack direction="row" alignItems="center" gap="2pc">
              <Button variant="text">
                <Typography color="primary">MOTOCICLETAS</Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary">FINANCIACIÓN</Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary">SERVICIOS</Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary">NOTICIAS</Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary">SERVICIO AL CLIENTE</Typography>
              </Button>
            </Stack>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <SearchIcon color="primary" fontSize="3pc" />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
