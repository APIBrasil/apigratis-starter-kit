// import APIBrasil from "apigratis-sdk-nodejs";

import axios from "axios";
import React, { useState } from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
  Alert,
  AlertIcon,
  AlertTitle
} from "@chakra-ui/react";

import { HSeparator } from "components/separator/Separator";
import DefaultAuth from "layouts/auth/Default";

// Assets
import illustration from "assets/img/auth/auth.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

export const SignIn = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorLogin, setErrorLogin] = useState(false);

  const onSubmitHandler = async (event) => {
    
    await axios.request({
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://cluster.apigratis.com/api/v2/login',
        headers: { 
            'Content-Type': 'application/json'
        },
        data : JSON.stringify({
            "email": email,
            "password": password
        })
    })
    .then((response) => {

        localStorage.setItem('user', JSON.stringify(response.data));

        if (response.data.authorization.token) {
            window.location.href = '/admin/dashboard';  
        }

        return response.data;

    })
    .catch((error) => {
      setErrorLogin(true);
    });

    event.preventDefault();

  };

  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";

  const [show, setShow] = React.useState(false);

  const handleClick = () => setShow(!show);

  return (

    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='100%'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'>
        
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Seja bem vindo!
          </Heading>
          <Text
            mb='36px'
            ms='4px'
            color={textColorSecondary}
            fontWeight='400'
            fontSize='md'>
            Faça login para continuar acessando o sistema
          </Text>
        </Box>

        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}>
        
          <Flex align='center' mb='25px'>
            <HSeparator />
            <HSeparator />
          </Flex>

            <FormControl>

              <FormLabel
                display='flex'
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                mb='8px'>
                E-mail
              </FormLabel>

              <Input
                isRequired={true}
                variant='auth'
                fontSize='sm'
                ms={{ base: "0px", md: "0px" }}
                type='email'
                placeholder='ellon@musk.com'
                mb='24px'
                fontWeight='500'
                size='lg'
                id='email'
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />

              <FormLabel
                ms='4px'
                fontSize='sm'
                fontWeight='500'
                color={textColor}
                display='flex'>
                Senha
              </FormLabel>

              <InputGroup size='md'>

                <Input
                  isRequired={true}
                  fontSize='sm'
                  placeholder='******'
                  mb='24px'
                  size='lg'
                  type={show ? "text" : "password"}
                  variant='auth'
                  id='password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />

                <InputRightElement display='flex' alignItems='center' mt='4px'>
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>

              </InputGroup>

              <Alert 
                status="error"
                mb={4}
                borderRadius="md"
                colorScheme="red"
                display={errorLogin ? "flex" : "none"}
              >
                {errorLogin && <AlertIcon />}
                {errorLogin && <AlertTitle mr={2}>E-mail ou senha incorretos</AlertTitle>}
              </Alert>

              <Button
                fontSize='sm'
                variant='brand'
                fontWeight='500'
                w='100%'
                h='50'
                mb='24px'
                type='submit'
                onClick={onSubmitHandler}
              >
                Fazer login

              </Button>

            </FormControl>

        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;