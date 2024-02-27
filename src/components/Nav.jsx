import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ImgLogo from "../assets/yamaha.svg";

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
          <Box component="img" src={ImgLogo} width="9pc" />
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, background: "red" }}
          >
            <MenuIcon />
          </IconButton> */}
          <Stack>
            <Typography color="primary">heejej</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
