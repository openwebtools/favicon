import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout
      title="Favicon Generator | Open Web Tools"
      p={4}
      justify="center"
      align="center"
      layerStyle="dotted"
    >
      <Flex direction="column" alignItems="center">
        <Heading fontSize="6xl" textAlign="center">
          Generate Favicon From
        </Heading>
        <Stack
          spacing="10"
          mt={[8, 10, 12, 24]}
          w={["80%", "80%", "60%", "40%"]}
        >
          <Button variant="solid" colorScheme="light">
            Image
          </Button>
          <Button variant="solid" colorScheme="dark">
            Text
          </Button>
          <Button variant="solid" colorScheme="dark">
            Emoji
          </Button>
        </Stack>
      </Flex>
    </Layout>
  );
}
