import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  colors: {
    primary: "#EAE7B1",
    secondary: "#A6BB8D",
    teritory: "#F1C93B",
    highlight: "#F0FF42",
  },
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Nunito, serif",
    mono: "Menlo, monospace",
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Nunito, sans-serif",
        color: mode("#CFFDE1", "#C6DE41")(props),
        bg: mode("#4B7551", "#304D4E")(props),
      },
      a: {
        color: "F2FFE9",
        _hover: {
          textDecoration: "underline",
        },
      },
    }),
  },
});
