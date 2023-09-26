/*eslint-disable*/
import React from "react";
import {
  Flex,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Footer() {
  
  const textColor = useColorModeValue("gray.400", "white");

  return (
    <Flex
      zIndex='3'
      flexDirection={{
        base: "column",
        xl: "row",
      }}
      alignItems={{
        base: "center",
        xl: "start",
      }}
      justifyContent='space-between'
      px={{ base: "30px", md: "50px" }}
      pb='30px'>
      <Text
        color={textColor}
        textAlign={{
          base: "center",
          xl: "start",
        }}
        mb={{ base: "20px", xl: "0px" }}>
        {" "}
        &copy; {1900 + new Date().getYear()}
        <Text as='span' fontWeight='500' ms='4px'>
          APIBrasil Sites e Softwares
        </Text>
      </Text>
    </Flex>
  );
}
