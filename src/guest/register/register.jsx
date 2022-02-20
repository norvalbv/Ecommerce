import "./register.scss";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const ariaLabel = { "aria-label": "description" };

export default function Register() {
  return (
    <div className="register">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        noValidate
        autoComplete="off"
        className="form"
      >
        <div className="name">
          <Input
            placeholder="First Name"
            inputProps={ariaLabel}
            className="name"
          />
          <Input
            placeholder="Last Name"
            inputProps={ariaLabel}
            className="name"
          />
        </div>
        <Input placeholder="Email Address" inputProps={ariaLabel} id="email" />
        <button>Register</button>
      </Box>
    </div>
  );
}
