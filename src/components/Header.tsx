import { Box, Heading, Text, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg='#6B46C1' pt='90px' pb='192px' px='32px' textAlign='center'>
      <Heading fontWeight='800' fontSize='48px' color='#F7FAFC'>
        Simple pricing for your business
      </Heading>
      <Text
        fontWeight='500'
        fontSize='24px'
        color='#F7FAFC'
        opacity='0.84'
        pt='16px'
      >
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
};

export default Header;
