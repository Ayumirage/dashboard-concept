import { Text } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ value, text }) => {
  return (
    <Box p={5} bg="purple.700" borderRadius="3xl">
      <Text textColor="white" mb={3} fontSize="sm">
        {text}
      </Text>
      <Heading textColor="white" fontWeight="bold" fontSize="2xl">
        {value}
      </Heading>
    </Box>
  );
};
