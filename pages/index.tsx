import { Box, Button, Flex, Heading, Stack } from "@chakra-ui/react";
import React, { RefObject, useState } from "react";
import Layout from "../src/components/Layout";
import IcoGenerator from "../src/services/IcoGenerator";

export default function Home() {
  const [image, setImage] = useState({ preview: "", raw: "" });
  const icoGenerator = new IcoGenerator();
  const inputOpenFileRef = React.createRef<any>();
  const handleChange = async (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0] as File;
      const blob = new Blob([file], { type: file.type });
      const icoFile = icoGenerator.createIcoFile(blob, 50);

      await icoFile.arrayBuffer().then((x) => console.log(x));
      setImage({
        preview: URL.createObjectURL(icoFile),
        raw: e.target.files[0],
      });
    }
  };

  const handleClick = (e) => {
    inputOpenFileRef.current.click();
  };

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
          <Button variant="solid" colorScheme="dark" onClick={handleClick}>
            Image
          </Button>
          <Button variant="solid" colorScheme="dark">
            Text
          </Button>
          <Button variant="solid" colorScheme="dark">
            Emoji
          </Button>
          <input
            type="file"
            ref={inputOpenFileRef}
            style={{ display: "none" }}
            onChange={handleChange}
          />

          {image.preview ? (
            <>
              <img src={image.preview} alt="dummy" width="256" height="256" />
              <a href={image.preview} target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </>
          ) : null}
        </Stack>
      </Flex>
    </Layout>
  );
}
