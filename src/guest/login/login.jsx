import "./login.scss";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function Login() {
  return (
    <div className="login">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        className="form"
      >
        <Input
          placeholder="Email Address"
          inputProps={ariaLabel}
          className="name"
        />
        <Input placeholder="Password" inputProps={ariaLabel} className="name" />
        <button>Login</button>

        <p id="forgot-pw">Forgot Password?</p>
      </Box>
    </div>
  );
}
