import { HStack, Icon, Text } from "@chakra-ui/react";
export default function BottomBox(props:any){
  const {icon,children} = props;

  return (
    <HStack spacing="6" align="start">
      <Icon as={icon} boxSize={{ base: "8", lg: "12" }} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );

}