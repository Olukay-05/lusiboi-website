import AppLayout from "./ui/AppLayout";
import {
  ChakraProvider,
  extendTheme,
  theme as chakraTheme,
  CSSReset,
} from "@chakra-ui/react";

// Destructure the Button and Toast from chakraTheme components
const { Button: ChakraButton, Toast } = chakraTheme.components;

const theme = extendTheme({
  components: {
    Button: ChakraButton,
    Toast,
  },
});

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <AppLayout />
    </ChakraProvider>
  );
}
