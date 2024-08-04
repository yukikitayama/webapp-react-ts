import { type FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { useCustomDispatch } from "../store/hooks";
import { login } from "../store/auth-slice";

type RequestData = {
  email: string;
  password: string;
};

type ResponseData = {
  token: string;
  userId: string;
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useCustomDispatch();
  const navigate = useNavigate();

  const formSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    // Extract name property in input
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as RequestData;

    // Clear form
    event.currentTarget.reset();

    // Send request to API
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/auth/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      }
    );

    // Extract token from API
    const responseData: ResponseData = await response.json();

    // Save token to local storage
    const token = responseData.token;
    localStorage.setItem("token", token);

    // Change authenticated Redux state
    dispatch(login(token));

    setIsLoading(false);

    navigate("/");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Stack spacing={3}>
        <TextField label="Email" fullWidth name="email" />
        <TextField label="Password" type="password" fullWidth name="password" />
        <Button variant="contained" type="submit" disabled={isLoading}>
          {!isLoading && "Submit"}
          {isLoading && <CircularProgress />}
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
