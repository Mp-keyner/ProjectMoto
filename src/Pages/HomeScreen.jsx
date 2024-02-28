import { Box, Stack, Typography } from "@mui/material";
import Nav from "../components/Nav";
import fondo from "../assets/banner_int_r15-1.jpg";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";

const HomeScreen = () => {
  const Logos = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Stack>
        <Nav />
        <Stack
          height="90vh"
          bgcolor="red"
          alignItems="flex-end"
          justifyContent="flex-end"
          sx={{
            backgroundImage: `url(${fondo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <Box
            sx={{
              background: "#ffffff2e",
              backdropFilter: "blur(10px)",
              width: "100%",
              height: "4pc",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              color="primary"
              variant="p"
              padding="1pc"
              component="div"
            >
              Incolmotos Yamaha
            </Typography>
          </Box>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          height="9pc"
          alignItems="center"
        >
          <Box
            component="img"
            src={logo1}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
          <Box
            component="img"
            src={logo2}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
          <Box
            component="img"
            src={logo3}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
          <Box
            component="img"
            src={logo4}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
          <Box
            component="img"
            src={logo5}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
          <Box
            component="img"
            src={logo6}
            height="4.5pc"
            sx={{
              objectFit: "contain",
            }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default HomeScreen;
