import {
  Button,
  Box,
  Flex,
  Heading,
  Text,
  StackProps,
  HStack,
  Icon,
  Stack,
} from "@chakra-ui/react";

import { CheckIcon } from "../icons/Icon";

export const ListItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as='li' spacing='20px' {...rest}>
      <Icon as={CheckIcon} w='22px' h='22px'></Icon>
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxWidth='990px'
      margin='auto'
      mt='-256px'
      borderRadius='12px'
      overflow='hidden'
      boxShadow='xl'
    >
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
        <Box p='60px' fontSize='18px' bg='white'>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='20px' pt='24px'>
            <ListItem>International calling and messaging API</ListItem>
            <ListItem>Additional phone numbers</ListItem>
            <ListItem>Automated messages via Zapier</ListItem>
            <ListItem>24/7 support and consulting</ListItem>
          </Stack>
        </Box>
      </Flex>
    </Box>
  );
};

export default Pricing;
