import { Box, Stack, Typography } from "@mui/material";
import Nav from "../components/Nav";
import fondo from "../assets/banner_int_r15-1.jpg";

const HomeScreen = () => {
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
      </Stack>
    </>
  );
};

export default HomeScreen;
