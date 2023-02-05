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
    <HStack as='li' spacing='5' {...rest}>
      <Icon as={CheckIcon} w='5' h='5'></Icon>
      <Text>{children}</Text>
    </HStack>
  );
};

const Pricing = () => {
  return (
    <Box
      maxWidth='5xl'
      margin='auto'
      mt='-64'
      borderRadius='3'
      overflow='hidden'
      boxShadow='xl'
    >
      <Flex>
        <Box bg='#f0eafb' p='15' textAlign='center'>
          <Text fontSize='2xl' fontWeight='800'>
            Premium PRO
          </Text>
          <Heading fontSize='6xl' pt='4'>
            $329
          </Heading>
          <Text pt='2'>billed just once</Text>
          <Button colorScheme='purple' size='lg' w='282px' mt='70'>
            Get Started
          </Button>
        </Box>
        <Box p='10' fontSize='lg' bg='white'>
          <Text>
            Access these features when you get this pricing package for your
            business.
          </Text>
          <Stack as='ul' spacing='5' pt='6'>
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
