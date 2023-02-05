import { HStack, Text, Icon, StackProps, Box } from "@chakra-ui/react";
import React from "react";

import {
  MoneyBackGuaranteeIcon,
  HassleFreeIcon,
  MonthlySubscriptionIcon,
} from "../icons/Icon";

interface FeatureProps extends StackProps {
  icon: React.ElementType;
}

const Feature = (props: FeatureProps) => {
  const { icon, children, ...rest } = props;

  return (
    <HStack {...rest} spacing='6'>
      <Icon as={icon} boxSize='12'></Icon>
      <Text textAlign='left' fontSize='lg' fontWeight='bold'>
        {children}
      </Text>
    </HStack>
  );
};

const Features = () => {
  return (
    <Box maxW='1024px' m='auto' pt='60px' pb='8'>
      <HStack px='12' spacing='5'>
        <Feature icon={MoneyBackGuaranteeIcon}>
          30 days money back Guarantee
        </Feature>
        <Feature icon={HassleFreeIcon}>No setup fees 100% hassle-free</Feature>
        <Feature icon={MonthlySubscriptionIcon}>
          No monthly subscription Pay once and for all
        </Feature>
      </HStack>
    </Box>
  );
};

export default Features;
