import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dotted } from "./component/dotted";

const config = {
  initialColorMode: "system" as const,
  useSystemColorMode: true,
};

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("white", "black")(props),
      color: mode("black", "white")(props),
    },
  }),
};

const theme = extendTheme({
  colors: {
    white: "#fbfbff",
    black: "#1c1c1e",
    dark: {
      200: "black",
      500: "black",
    },
    light: {
      200: "white",
      500: "white",
    },
  },
  layerStyles: {
    dotted: {
      ...Dotted,
    },
  },
  shadows: {},
  styles: styles,
  ...config,
});

export default theme;
