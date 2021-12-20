import { Text } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";

export default () => {
  const Item = ({ icon, title, date, amount, isSent }) => (
    <Box>
      <Flex>
        <Box
          fontSize="xl"
          borderRadius="lg"
          p={2}
          bg={isSent ? "#FFF3F1" : "#F1F1F3"}
          textColor={isSent ? "#FAB2A3" : "#9891A7"}
        >
          {isSent ? <FiArrowUp /> : <FiArrowDown />}
        </Box>
        <Box ml={2}>
          <Heading fontSize="sm" fontWeight="semibold">
            {title}
          </Heading>
          <Text fontSize="xs" fontWeight="thin">
            {date}
          </Text>
        </Box>
        <Spacer />
        <Text
          fontSize="sm"
          fontWeight="semibold"
          textColor={isSent ? "#FE8872" : "#9F9AAB"}
        >
          {amount}
        </Text>
      </Flex>
    </Box>
  );

  return (
    <Box>
      <Flex fontSize="sm" textColor="gray.400">
        <Text>TRANSACTIONS</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          VIEW ALL
        </Text>
      </Flex>
      <Stack mt={4} spacing={4}>
        <Item
          title="Sent BTC"
          date="11 Dec, 2021"
          amount="-$10,180.00"
          isSent
        />
        <Item title="Received USDT" date="9 Nov, 2021" amount="+$12,369.00" />
        <Item title="Sent CRV" date="01 Okt, 2021" amount="-$2,889.00" isSent />
      </Stack>
    </Box>
  );
};
