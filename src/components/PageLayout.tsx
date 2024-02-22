"use client";
import { Flex } from "@chakra-ui/react";
import useStore from "@/lib/store";
import LoginButton from "./LoginButton";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({
  children,
  source,
}: {
  children: React.ReactNode;
  source: string;
}) => {
  const { isLoggedIn } = useStore();
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      height="100vh"
    >
      <Header source={source} />
      {isLoggedIn ? children : <LoginButton />}
      <Footer />
    </Flex>
  );
};

export default PageLayout;
