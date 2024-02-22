"use client";
import { Box, Heading, Flex, Button } from "@chakra-ui/react";

import PageLayout from "@/components/PageLayout";
import useStore from "@/lib/store";

const Home = () => {
  const { items } = useStore();
  return (
    <PageLayout source="index">
      <Box>
        <Heading>These are the existing requests:</Heading>
        <Flex>
          {items.map((item, index) => (
            <Box key={index} p={4}>
              <p>{item.name}</p>
              <p>{item.description}</p>
              <p>{item.owner}</p>
              <p>{item.email}</p>
              <Button>Delete</Button>
            </Box>
          ))}
        </Flex>
      </Box>
    </PageLayout>
  );
};

export default Home;
