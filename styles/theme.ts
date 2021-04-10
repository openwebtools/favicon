import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
      500: "black",
    },
    light: {
      500: "white",
    },
  },
  shadows: {},
  styles: styles,
  ...config,
});

export default theme;
