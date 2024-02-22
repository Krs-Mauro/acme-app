import { Heading, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      p={4}
      width="100vw"
      bg="cyan.800"
      height="80px"
    >
      <Heading color="gray.50">ACME - APP</Heading>
    </Flex>
  );
};

export default Footer;
