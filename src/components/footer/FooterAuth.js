/*eslint-disable*/
import React from "react";
import {
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {

  let textColor = useColorModeValue("gray.400", "white");
  
  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        lg: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "0px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", lg: "0px" }}>
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          APIBrasil Sites e Softwares
        </Text>
      </Text>
    </Flex>
  );
}
