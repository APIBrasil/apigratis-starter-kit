// Chakra imports
import {
  Box,
  SimpleGrid,
} from "@chakra-ui/react";
// Assets
import MiniStatistics from "components/card/MiniStatistics";
import React from "react";

export default function UserReports() {

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

      <SimpleGrid
        columns={{ base: 3, md: 3, lg: 3, "2xl": 6  }}
        gap='20px'
        mb='20px'>
        
        <MiniStatistics name='Conectados' value='34'/>
        <MiniStatistics name='Desconectados' value='12' />
        <MiniStatistics name='Total' value='46' />
        
      </SimpleGrid>

    </Box>
  );

}
