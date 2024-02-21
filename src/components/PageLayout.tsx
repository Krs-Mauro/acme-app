import { Flex } from "@chakra-ui/react";
import Header from "./Header";
import Footer from "./Footer";

const PageLayout = ({
  children,
  source,
}: {
  children: React.ReactNode;
  source: string;
}) => {
  return (
    <Flex justifyContent="space-between" flexDirection="column" height="100vh">
      <Header source={source} />
      {children}
      <Footer />
    </Flex>
  );
};

export default PageLayout;
