import { Avatar } from "@chakra-ui/avatar";
import { Image } from "@chakra-ui/image";
import { Spacer } from "@chakra-ui/layout";
import { HStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { FiBell, FiSearch, FiSettings } from "react-icons/fi";

export default () => {
  return (
    <Box p={8}>
      <Flex>
        <Image src="/assets/logo.png" w={12} />
        <Spacer />
        <HStack fontSize="xl" spacing="4">
          <FiSearch />
          <FiBell />
          <FiSettings />
          <Avatar w={12} src="https://unsplash.com/photos/mEZ3PoFGs_k" />
        </HStack>
      </Flex>
    </Box>
  );
};
