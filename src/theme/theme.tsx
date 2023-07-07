import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const theme = extendTheme({
  colors: {
    primary: "#B9F3FC",
    secondary: "#AEE2FF",
    teritory: "#93C6E7",
    button: "#FEDEFF",
  },
  fonts: {
    body: "Nunito, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Nunito, sans-serif",
        color: mode("FEC868", "FDA769")(props),
        bg: mode("#FDA769", "#FEC868")(props),
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
