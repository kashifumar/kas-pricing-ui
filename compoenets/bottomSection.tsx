"use client";
import {VStack, Flex} from '@chakra-ui/react';
import BottomBox from './bottomBox';
import { MoneyBackSVG,SubscriptionSVG,SetupFeeSVG } from './assets/icons';

export default function BottomSection(){
  return (
     <VStack as='section' maxW='1024px' m='auto' pt='60px' pb='8'>        
      <Flex px="12" direction={{ base: "column", lg: "row" }}>
        <BottomBox icon={MoneyBackSVG}>30 days money back Guarantee</BottomBox>
        <BottomBox icon={SetupFeeSVG}>No setup fees 100% hassle-free</BottomBox>
        <BottomBox icon={SubscriptionSVG}>No monthly subscription Pay once and for all</BottomBox>
      </Flex>    
    </VStack>      
  );
}