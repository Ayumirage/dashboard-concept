import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ title, balance, balance2, income, expense }) => {
  return (
    <Box p={8} borderRadius="3xl" bg="purple.700" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        TOTAL DEPOSITS
      </Text>
      <Heading mt={4}>2.34105027 BTC</Heading>
      <Text fontSize="sm" textColor="gray.200" mt={1}>
        $ 112,010
      </Text>
      <HStack mt={4}>
        <Box w="50%">
          <Heading size="sms">50%</Heading>
          <Text fontSize="xs">LTV Ratio</Text>
        </Box>
        <Box w="50%">
          <Heading size="sms">60%</Heading>
          <Text fontSize="xs">MAX LTV</Text>
        </Box>
      </HStack>

      {/* Buttons */}
      <HStack mt={4}>
        <Box w="50%">
          <Button w="full" textColor="#6699CC">
            DEPOSIT
          </Button>
        </Box>
        <Box w="50%">
          <Button w="full" bgGradient="linear(to-r, orange.500, orange.300)">
            BORROW
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
