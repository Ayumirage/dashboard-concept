import { Button } from "@chakra-ui/button";
import { Heading } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

export default ({ title, balance, balance2, income, expense }) => {
  return (
    <Box p={8} borderRadius="3xl" bg="#6699CC" textColor="white">
      <Text textTransform="uppercase" fontSize="xs" fontWeight="bold">
        BALANCE DETAILS
      </Text>
      <Heading mt={6}>$ 1,500,000.00</Heading>
      <Text fontSize="sm" textColor="gray.200" mt={1}>
        3.34105027 BTC
      </Text>
      <HStack mt={4}>
        <Box w="50%">
          <Heading size="sms">$12,256.00</Heading>
          <Text fontSize="xs">Income</Text>
        </Box>
        <Box w="50%">
          <Heading size="sms">$20,289.00</Heading>
          <Text fontSize="xs">Expense</Text>
        </Box>
      </HStack>

      {/* Buttons */}
      <HStack mt={4}>
        <Box w="50%">
          <Button w="full" textColor="#6699CC">
            RECEIVE
          </Button>
        </Box>
        <Box w="50%">
          <Button w="full" bg="#6FBD71">
            SEND
          </Button>
        </Box>
      </HStack>
    </Box>
  );
};
