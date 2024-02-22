"use client";

import { Button } from "@chakra-ui/react";
import useStore from "@/lib/store";

const LoginButton = () => {
  const { isLoggedIn, toggleLogin } = useStore();
  return (
    <Button onClick={toggleLogin}>{isLoggedIn ? "Logout" : "Login"}</Button>
  );
};

export default LoginButton;
