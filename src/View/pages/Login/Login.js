import React, { useEffect, useState } from 'react'
import useViewModel from "./ViewModel"
import { ImFacebook2 as FacebookIcon } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Divider, Fade, Flex, Image, Input, Text, VStack } from '@chakra-ui/react';

function Login() {

  const {email, password, setEmail, setPassword} = useViewModel()

  const navigate = useNavigate()

  const [image, setImage] = useState(true);

  const images = [
    "images/screenshot1-2x.png",
    "images/screenshot2-2x.png",
    "images/screenshot3-2x.png",
    "images/screenshot4-2x.png",
  ]

  const isValid = ()=>{
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(re.test(email))
    if(!re.test(email)){
      return false
    }else if(password.length < 6){
      return false
    }else{
      return true
    }
  }

  
  // useEffect(()=>{
  //   setInterval(()=>{
      
  //     setImage(!image)

  //   }, 5000)
  // }, [])

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh'}}>      
      <Box height={10}></Box>
      <Flex direction='row' justifyContent='center' spacing={2}>
        <Box  
        display={["none", "none", "none", 'flex']}          
        sx={{
          position: 'relative',           
          backgroundImage: 'url(images/home-phones.png)', 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'center',
          backgroundSize: '400px 90vh',
          height: "90vh",           
          width:'400px',
          }}>
          <Image src={'images/screenshot2-2x.png'} style={{opacity: image ? '1' : '0',position: 'absolute',height: "75vh", width: '220px', bottom: 65, right: 48, transition: 'opacity .5 ease-in'}}/>
        </Box>
        <VStack justifyContent={'center'} alignItems='center'>
          <Container sx={{border: 'rgba(0,0,0, .14) solid 1px', borderRadius: '5px', width: '400px', backgroundColor: 'white'}}>
            <Box height={50}></Box>
            <Image src='images/logo-full.png' height={20} margin='auto'/>
            <Input 
              size='md'
              placeholder='abc@site.com'
              fullWidth={'100%'}       
              focusBorderColor='gray'              
              value={email}  
              type={'email'}              
              onChange={(e)=>setEmail(e.target.value)} 
              />
            <Box height={3}></Box>
            <Input
              size='md'
              fullWidth='100%'
              focusBorderColor='gray'         
              placeholder='********'
              value={password}  
              type={'password'}              
              onChange={(e)=>setPassword(e.target.value)} 
              />
            <Box height={3}></Box>              
            <Button size='sm' colorScheme='blue' width='100%' sx={{textTransform: 'none', backgroundColor: 'rgba(77,181,249,255)'}} isDisabled={!isValid()}>Login</Button>
            <Flex direction={'row'} alignItems='center'>
              <Divider/>
              <Text variant='h6' p={2} color={'gray'} fontSize={13}>OR</Text>
              <Divider colorScheme={'red'} size='3px'/>
            </Flex>
            <Box height={3}></Box>
            <Button size='sm' variant='text' isDisabled={true} textTransform={'none'} textColor='blue'><FacebookIcon/><Box width={3}></Box>{"Log in with Facebook"}</Button>
            <Box height={3}></Box>
            <Button size={'sm'} variant='text'>Forget password?</Button>
            <Box height={6}></Box>
          </Container>
          <Box height={4}></Box>
          <Container  sx={{border: 'rgba(0,0,0, .14) solid 1px', borderRadius: '5px', width: '400px', backgroundColor: 'white'}}>
            <Box height={4}></Box>            
            <Flex direction={'row'} alignItems='center' justifyContent={'center'}>
              <Text>Don't have an account?</Text>
              <Button size='sm' variant='text' textTransform='none' color={'blue'} onClick={()=>navigate('/register')}>Sign up</Button>
            </Flex>
            <Box height={4}></Box>
          </Container>
        </VStack>
      </Flex>   
      <Box height={10}></Box>
    </div>
  )
}

export default Login
