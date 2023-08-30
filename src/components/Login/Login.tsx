import { FC } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import loginImage from "../../assets/login_background.svg";
import CompanyLogo from "../../assets/company_logo.svg";
import "./login-styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#390879",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: "#E0C2FF",
      light: "#F5EBFF",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#47008F",
    },
  },
});

export const Login: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="page-layout">
        <div className="login-left-side">
          <div className="login-image-wrapper">
            <Box
              component="img"
              sx={{
                height: "100%",
                maxWidth: 500,
              }}
              alt="The house from the offer."
              src={loginImage}
            />
            <Box
              component="img"
              sx={{
                height: "100%",
                maxWidth: 200,
                position: "absolute",
              }}
              alt="The house from the offer."
              src={CompanyLogo}
            />
          </div>
        </div>
        <Box
          sx={{
            maxWidth: 460,
            display: "flex",
            flexGrow: 1,
            flexDirection: "column",
            backgroundColor: "white",
            padding: "50px 75px",
          }}
        >
          <div className="back-button">
            <Button
              sx={{
                maxWidth: "36px",
                width: "100%",
                minWidth: "20px",
                height: "36px",
                borderRadius: "100%",
                "& .MuiButton-startIcon": {
                  marginRight: "0px",
                },
              }}
              variant="contained"
              startIcon={<ArrowBack />}
            />
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: "16px",
                letterSpacing: "-0.31px",
              }}
              variant="body1"
              color={"primary"}
              ml={1}
            >
              Back to home
            </Typography>
          </div>
          <div className="title">
            <span>Login</span>
            <span> Now</span>
          </div>
          <Typography
            paragraph
            sx={{
              fontSize: "16px",
              fontWeight: 600,
              maxWidth: "310px",
              letterSpacing: "-0.31px",
              color: "#6F7C8E",
            }}
          >
            Enter Your mobile number and verify OTP to get access of your
            account.
          </Typography>

          <TextField
            id="outlined-helperText"
            label="Mobile number"
            color="primary"
            sx={{
              margin: "28px 0",
              "& .MuiInputBase-adornedStart": {
                borderRadius: "50px",
              },
              "& .MuiInputBase-inputAdornedStart": {
                padding: "12px 0",
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              ),
            }}
          />

          <Button
            sx={{
              borderRadius: "50px",
              padding: "11px 0",
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "none",
            }}
            variant="contained"
          >
            Get OTP
          </Button>

          <div className="divider">
            <hr />
            <div className="circle-wrapper">
              <div className="circle">
                <div>OR</div>
              </div>
            </div>
          </div>

          <div className="create-account-block">
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "-0.31px",
              }}
            >
              If you don’t have an account?
            </Typography>
            <Link
              component="button"
              variant="body2"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                letterSpacing: "-0.31px",
              }}
              onClick={() => {
                console.info("create new click");
              }}
            >
              Create New
            </Link>
          </div>
        </Box>
      </div>
    </ThemeProvider>
  );
};
