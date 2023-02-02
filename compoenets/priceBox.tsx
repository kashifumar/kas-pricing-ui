"use client";
import {VStack,Flex,Box,Text,Heading,Button,Stack,StackProps,HStack,Icon} from '@chakra-ui/react';
import { OkSVG } from './assets/icons';


export const PriceBoxItem = (props: StackProps) => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing={5} align="flex-start" {...rest}>
      <Icon as={OkSVG} w="22px" h="22px" flexShrink={0} />
      <Text textAlign="left">{children}</Text>
    </HStack>
  );
};

export default function PriceBox(){
  return (
    <VStack maxW='994' m='auto' mt="-100px" textAlign='center' borderRadius='lg' overflow='hidden'>
      <Flex direction={{base:'column', md:'row'}}>
        <Box bg='#F0EAFB' p={{ base: "7vh", sm: "60px" }}>
          <Text fontSize="xl" fontWeight="800">Premium PRO</Text>          
          <Heading as="h3" fontSize={{ base: "5xl", lg: "6xl" }} mt="4">$329</Heading>
          <Text color="gray.900" fontSize="lg" fontWeight="medium" mt="2">billed just once</Text>
          <Button colorScheme="purple" size="lg" w={{ base: "auto", sm: "282px" }} mt="6">Get Started</Button>
        </Box>

        <Box p={{ base: "8", lg: "60px" }} fontSize="lg" bg="white">
          <Text textAlign="left">Access these features when you get this pricing package for your business.</Text>
          <Stack as="ul" spacing="5" pt="6">
            <PriceBoxItem>International calling and messaging API</PriceBoxItem>
            <PriceBoxItem>Additional phone numbers</PriceBoxItem>
            <PriceBoxItem>Automated messages via Zapier</PriceBoxItem>
            <PriceBoxItem>24/7 support and consulting</PriceBoxItem>
          </Stack>
          </Box>
      </Flex>
    </VStack>
    
  );
}