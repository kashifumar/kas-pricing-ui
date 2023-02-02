"use client";
import {VStack,Heading, Text} from '@chakra-ui/react';  

export default function TopSection(){
  return (
  
  <VStack as={'section'} bg='purple.600' color='gray.50' pt={{base:'14vh', md:'22vh'}} 
  pb='22vh' textAlign={{base:'left', md:'center'}} fontFamily='Inter'>
    <Heading fontWeight='800' fontSize={{base:'30px', md:'48px'}}>Simple pricing for your business</Heading>  
    <Text fontWeight='500' fontSize={{base:'18px', md:'24px'}} 
     textAlign={{base:'left', md:'center'}}>Plans that are carefully crafted to suit your business.</Text>
  </VStack>  
  
  );
}