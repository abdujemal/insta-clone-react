import { Box, Button, Container, Divider, Flex, Image, Input, Text } from '@chakra-ui/react';
import React from 'react'
import { ImFacebook2 as FacebookIcon, } from "react-icons/im";
import { useNavigate } from 'react-router-dom';
import useVeiwModel from './ViewModel';

function Register() {

  const {inputs, setInputs} = useVeiwModel();

  const navigate = useNavigate();

  
    const isValid = ()=>{
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(inputs.email)){
        return false
      }else if(inputs.fullName == ""){
        return false
      }else if(inputs.userName == ""){
        return false
      }else if(inputs.title == ""){
        return false
      }else if(inputs.bio == ""){
        return false
      }else if(inputs.password.length < 6){
        return false
      }else{
        return true
      }
    }

  return (
    <div>
      <Box height={2}></Box>
      <Flex justifyContent={'center'}>
        <Container sx={{border: 'rgba(0,0,0, .14) solid 1px', borderRadius: '5px', width: '400px', backgroundColor: 'white'}}>
          <Box height={4}></Box>
          <Image src='images/logo-full.png' height={20} margin='auto'/>
          <Box height={2}></Box>
          <Text sx={{fontSize:19, fontWeight: 'bold'}}>Sign up to see photos and videos from your freinds.</Text>
          <Box height={3}></Box>
          <Button variant='contained' color={'blue'} fullWidth='100%' size='small' sx={{textTransform: 'none'}}><FacebookIcon/><Box width={2}></Box>{"Log in with Facebook"}</Button>
          <Box height={3}></Box>
          <Flex alignItems='center'>
            <Divider sx={{flex: 1, width:2}}/>
            <Text variant='h6' p={2} color={'gray'} fontSize={15}>OR</Text>
            <Divider sx={{flex: 1}}/>
          </Flex>
          <Input
              size='md'
              placeholder='Enter your email'
              fullWidth='8px'   
              name='email'   
              value={inputs.email}  
              type={'email'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Input 
              size='md'
              placeholder='Full Name'
              fullWidth='100%'   
              name='fullName'     
              value={inputs.fullName}  
              type={'text'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Input 
              size='md'
              placeholder='User Name'
              fullWidth='100%'   
              name='userName'     
              value={inputs.userName}  
              type={'text'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Input 
              size='md'
              placeholder='Title'
              fullWidth='100%'   
              name='title'     
              value={inputs.title}  
              type={'text'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Input 
              size='md'
              placeholder='Bio'
              fullWidth='100%'   
              name='bio'     
              value={inputs.bio}  
              type={'text'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Input 
              size='md'
              placeholder='password'
              fullWidth='100%'   
              name='password'     
              value={inputs.password}  
              type={'password'}
              variant="outline" 
              onChange={(e)=>setInputs({...inputs, [e.target.name]: e.target.value})} 
              />
            <Box height={3}></Box>
            <Button onClick={()=>console.log(inputs)} size='sm' colorScheme={'blue'} width='100%' sx={{textTransform: 'none'}} isDisabled={!isValid()}>Sign up</Button>
            <Box height={6}></Box>
          </Container>
      </Flex>
      <Box height={3}></Box>
      <Container  sx={{border: 'rgba(0,0,0, .14) solid 1px', borderRadius: '5px', width: '400px', backgroundColor: 'white'}}>
            <Box height={4}></Box>            
            <Flex direction={'row'} alignItems='center' justifyContent={'center'}>
              <Text>Already have an account?</Text>
              <Button size='sm' variant='text' textTransform='none' color={'blue'} onClick={()=>navigate('/login')}>Login</Button>
            </Flex>
            <Box height={4}></Box>
      </Container>
    </div>
  )
}

export default Register
