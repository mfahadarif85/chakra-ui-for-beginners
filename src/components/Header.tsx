import { Box, Heading, Text, Center } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box as='section' pb='28'>
      <Box
        bg='purple.600'
        color='gray.50'
        pt='90px'
        pb='192px'
        px='8'
        textAlign='center'
      >
        <Heading fontWeight='extrabold' fontSize='5xl'>
          Simple pricing for your business
        </Heading>
        <Text fontWeight='medium' fontSize='2xl' opacity='0.84' pt='4'>
          Plans that are carefully crafted to suit your business.
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
