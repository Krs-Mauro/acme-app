"use client";
import { Box, Flex, Button, Text } from "@chakra-ui/react";
import BoldText from "@/components/BoldText";
import useStore from "@/lib/store";

interface item {
  name: string;
  description: string;
  owner: string;
  email: string;
}
const Card = ({ item, index }: { item: item; index: number }) => {
  const { removeItem } = useStore();

  const handleDelete = () => {
    removeItem(index);
  };

  return (
    <Flex
      backgroundColor="cyan.100"
      justifyContent="center"
      borderRadius="lg"
      width="250px"
      p={4}
      data-testid={"card"}
    >
      <Box
        backgroundColor="white"
        textAlign="center"
        width="200px"
        borderRadius="lg"
        p={4}
      >
        <BoldText size="md" text={item.name} />
        <BoldText size="sm" text={item.owner} />
        <Text overflowY="auto" maxHeight="100px">
          {item.description}
        </Text>
        <BoldText size="sm" text={item.email} />
        <Button mt={3} backgroundColor="cyan.300" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Flex>
  );
};

export default Card;
