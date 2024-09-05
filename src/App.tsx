import { Box } from "@chakra-ui/react";

import Generator from "./views/Generator";

function App() {
  return (
    <Box display="flex" justifyContent="center" p={8}>
      <Generator />
    </Box>
  );
}

export default App;
