import { Button, Box, Flex, Heading, Text } from "@chakra-ui/react";
const Pricing = () => {
  return (
    <Box>
      <Flex>
        <Box bg='#f0eafb' p='60px' textAlign='center'>
          <Text fontSize='24px' fontWeight='800'>
            Premium PRO
          </Text>
          <Heading fontSize='60px' pt='16px'>
            $329
          </Heading>
          <Text pt='8px'>billed just once</Text>
          <Button colorScheme='purple' size='lg' w='282px' mt='24px'>
            Get Started
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
