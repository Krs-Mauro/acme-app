"use client";
import { Box, Heading, Flex } from "@chakra-ui/react";

import PageLayout from "@/components/PageLayout";
import Card from "@/components/Card";
import useStore from "@/lib/store";

const Home = () => {
  const { items } = useStore();
  return (
    <PageLayout source="index">
      <Box>
        <Heading m={10}>
          {items.length
            ? "These are the existing requests"
            : "Start by creating a new request with the form button"}
        </Heading>
        <Flex>
          {items.map((item, index) => (
            <Card key={index} item={item} index={index} />
          ))}
        </Flex>
      </Box>
    </PageLayout>
  );
};

export default Home;
