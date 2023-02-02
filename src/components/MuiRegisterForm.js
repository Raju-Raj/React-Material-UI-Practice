import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MuiRegisterForm = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.password === values.confirmpassword) {
      alert("Register Successfull");
      console.log(values);
    } else {
      alert("Password Not Matched");
    }
  };
  return (
    <Box
      sx={{
        width: {
          lg: "100%",
        },
        maxWidth: 500,
        margin: "auto",
        background: "white",
        padding: 5,
        borderRadius: 5,
      }}
    >
      <Typography variant="h2" gutterBottom color="primary" sx={{ margin: 1 }}>
        Register
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue=""
          fullWidth
          type="text"
          sx={{ margin: 1 }}
          name="name"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue=""
          fullWidth
          type="email"
          sx={{ margin: 1 }}
          name="email"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          defaultValue=""
          fullWidth
          type="password"
          sx={{ margin: 1 }}
          name="password"
          onChange={handleChange}
        />
        <TextField
          required
          id="outlined-required"
          label="Confirm Password"
          defaultValue=""
          fullWidth
          type="password"
          sx={{ margin: 1 }}
          name="confirmpassword"
          onChange={handleChange}
        />
        <Box sx={{ margin: 1 }}>
          <Checkbox {...label} defaultChecked />
          <Typography variant="caption">Accept terms and condition</Typography>
        </Box>
        <Button type="submit" variant="contained" fullWidth sx={{ margin: 1 }}>
          Register
        </Button>
      </form>
    </Box>
  );
};

export default MuiRegisterForm;
