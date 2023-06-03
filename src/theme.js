import { extendTheme } from "@chakra-ui/react";

import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const thick = defineStyle({
    borderWidth: '5px', // change the width of the border
    borderStyle: "solid", // change the style of the border
    borderRadius: 10, // set border radius to 10
})

const dividerTheme = defineStyleConfig({
    variants: { thick },
})

const customeTheme = extendTheme({
    components: { Divider: dividerTheme },
    colors: {},
    fonts: {},
    fontSizes: {},
    breakpoints: {
      sm: "320px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
  });
  
  export default customeTheme;