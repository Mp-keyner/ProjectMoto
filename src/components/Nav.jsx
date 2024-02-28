import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
            <Stack
              direction="row"
              alignItems="center"
              gap="2pc"
              position="relative"
              // bgcolor="red"
            >
              <Accordion
                sx={{
                  width: "10pc",
                  position: "absolute",
                  top: "0",
                  left: "-10pc",
                  height: "2.5pc",
                  boxShadow: "none",
                  background: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{
                    // background: "blue",
                    height: "2pc",
                  }}
                >
                  <Typography
                    color="primary"
                    variant="p"
                    sx={{
                      // background: "orange",
                      height: "2pc",
                    }}
                  >
                    MOTOCICLETAS
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button variant="text">
                    <Typography color="primary" variant="p">
                      FINANCIACIÓN
                    </Typography>
                  </Button>
                  <Button variant="text">
                    <Typography color="primary" variant="p">
                      FINANCIACIÓN
                    </Typography>
                  </Button>
                  <Button variant="text">
                    <Typography color="primary" variant="p">
                      FINANCIACIÓN
                    </Typography>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Button variant="text">
                <Typography color="primary" variant="p">
                  FINANCIACIÓN
                </Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary" variant="p">
                  SERVICIOS
                </Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary" variant="p">
                  NOTICIAS
                </Typography>
              </Button>
              <Button variant="text">
                <Typography color="primary" variant="p">
                  SERVICIO AL CLIENTE
                </Typography>
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
