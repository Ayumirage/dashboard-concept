import { Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/layout";
import { Stack } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { BiBitcoin } from "react-icons/bi";
import { Image } from "@chakra-ui/image";

export default () => {
  const Wallet = ({
    icon,
    title,
    subtitle,
    percent,
    change,
    loss,
    color1,
    color2,
  }) => (
    <Box>
      <Flex alignItems="center">
        <Box
          borderRadius="lg"
          fontSize="xl"
          p={3}
          bg={color1}
          textColor={color2}
        >
          {icon}
        </Box>
        <Box ml={2}>
          <Heading fontSize="md">{title}</Heading>
          <Text fontSize="xs" mt={1}>
            {subtitle}
          </Text>
        </Box>
        <Spacer />
        <Box textAlign="right">
          <Text fontSize="16" fontWeight="semibold">
            {percent}
          </Text>
          <Text
            fontSize="12"
            textColor={loss ? "red" : "black"}
            fontWeight="thin"
          >
            {change}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box ml={6} mr={4}>
      <Flex mb={4} textColor="gray.400" fontSize="sm">
        <Text>DEPOSIT COLLATERAL</Text>
        <Spacer />
        <Text
          fontWeight="semibold"
          textColor="blackAlpha.700"
          _hover={{ cursor: "pointer" }}
        >
          vAPR
        </Text>
      </Flex>
      <Stack>
        <Wallet
          title="CVX"
          subtitle="Convex Pools"
          icon={<Image src="/assets/cvx.svg" w={12} />}
          percent="22%"
          change="-2.5%"
          loss
          color1="#FFECE8"
          color2="#FE8F7B"
        />
        <Wallet
          title="YFI"
          subtitle="Yearn Pools"
          icon={<Image src="/assets/yfi.svg" w={12} />}
          percent="16%"
          change="+2.5%"
          color1="#FCF6DD"
          color2="#EDCC48"
        />
        <Wallet
          title="CRV"
          subtitle="Curve Pools"
          icon={<Image src="/assets/crv.svg" w={12} />}
          percent="14%"
          change="-3.5%"
          loss
          color1="#E0F4F8"
          color2="#43B8D5"
        />
      </Stack>
    </Box>
  );
};
