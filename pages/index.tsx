import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Layout from "../src/components/Layout";

export default function Home() {
  return (
    <Layout title="Favicon Generator | Open Web Tools" p={4}>
      <Box>
        <Heading fontSize="6xl" textAlign="center">
          Generate Favicon From
        </Heading>
        <Stack spacing="6" mt={8}>
          <Button variant="outline" colorScheme="dark">
            Image
          </Button>
          <Button variant="outline" colorScheme="dark">
            Text
          </Button>
          <Button variant="outline" colorScheme="dark">
            Emoji
          </Button>
        </Stack>
      </Box>
    </Layout>
  );
}
