"use client";

import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import LoginButton from "./LoginButton";

const Header = ({ source }: { source: string }) => (
  <Flex alignItems="center" justifyContent="space-between" p={4} bg="cyan.800">
    {source === "form" ? (
      <Link href="/">
        <Button>Home</Button>
      </Link>
    ) : (
      <Link href="/form">
        <Button>Form</Button>
      </Link>
    )}
    <LoginButton />
  </Flex>
);

export default Header;
