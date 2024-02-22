"use client";
import { Heading } from "@chakra-ui/react";

const BoldText = ({ size, text }: { size: string; text: string }) => (
  <Heading size={size} my={4}>
    {text}
  </Heading>
);

export default BoldText;
