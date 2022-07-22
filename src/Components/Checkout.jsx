import React, { useReducer } from 'react'
import { Avatar, Box,Button,Center,Checkbox,Flex,FormControl,FormLabel,Heading,HStack,Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, Stack, Text, WrapItem } from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons"

function reducer(state,action){
  switch(action.type){
  case'name':{
    return{
      ...state,
      name:action.payload,
    }
  }
  case'last':{
    return{
      ...state,
      last:action.payload,
    }
  }
  case'state':{
    return{
      ...state,
      state:action.payload,
    }
  }
  case'pincode':{
    return{
      ...state,
      pincode:action.payload,
    }
  } case'city':{
    return{
      ...state,
      city:action.payload,
    }
  }
  case'company':{
    return{
      ...state,
      company:action.payload,
    }
  }
  case'address ':{
    return{
      ...state,
      address:action.payload,
    }
  }
  default:{return state}
}
}
const initstate={
   name:"",
   last:"",
   company:"",
   address:"",
   state:"",
   pincode:"",
  city:"",
  country:"",
}



const Checkout = () => {
  const[state,Setstate]=useReducer(reducer,initstate)



  return (
    <Box border={"1px solid black"}>
        <Box margin="10vh" w="50%" border={"1px solid green"} padding="5px">
           <Image  h="80px"  src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?v=1645644264" />
           <Flex display="flex">
           <Center h="20px"><Text fontSize={"10px"}>Cart<ChevronRightIcon boxSize={"15px"}/> Information<ChevronRightIcon boxSize={"15px"}/>Shipping<ChevronRightIcon boxSize={"15px"}/>Payment</Text></Center>
           </Flex>
           <Box h={"100px"} w="90%" border={"1px solid black"}  borderRadius={"5px"}>
            <Text align={"center"}>Express Checkout</Text>
            <Box   margin="auto" w="100%" h="10vh">
                <Flex justifyContent={"space-around"} alignItems="center" paddingTop={"10px"}> 
                <Box h="50px" w="180px"  border={"1px solid black"} borderRadius={"5px"}><Image h="48px" w="178px" src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/05/about-shop-pay-1536x806.jpg'/></Box>
                <Box  h="50px" w="180px" border={"1px solid black"} borderRadius={"5px"}><Image  h="48px" w="178px"src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg'/></Box>
                <Box  h="50px" w="180px" border={"1px solid black"} align="center" borderRadius={"5px"}> <Image h="45px" w="178px"  src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/03/30/google-pay-crs-1-1096059-1648632689.jpg?itok=Nt6gBe2W'/> </Box>
                </Flex>
             </Box>
            </Box>
            <Box h="100px" w="400px" border={"1px solid black"}>
                <Text>Contack Information</Text>
                <Flex justifyContent={"space-around"}> 
                <WrapItem marginTop={"10px"}>
               <Avatar size='md'  />
               </WrapItem>
               <Box w="80%" border={"1px solid black"}>
                  <Text>name(id)</Text>
                  <Button h="25px">Logout</Button>
               </Box>
                </Flex>
                <Checkbox>Email Me with new and Offers</Checkbox>
               </Box>
              <Box  marginTop={"10px"} border={"1px solid black"} h="-moz-max-content" w="100%" gap={"20px"} >
                <Text size={"25px"}>Shipping Address</Text>
                <Stack marginTop={"20px"} spacing="15px">
                <FormControl>
                   <Select placeholder='Country/Region' value={state.country} onChange={(e)=>Setstate({type:"country",payload:e.target.value})} variant='filled'>
                      <option value='USA'>United States</option>
                   </Select>
                </FormControl>
                <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <Input placeholder="Firstname" value={state.name} onChange={(e)=>Setstate({type:"name",payload:e.target.value})} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <Input placeholder='Lastname' value={state.last} onChange={(e)=>Setstate({type:"last",payload:e.target.value})} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
                <Input placeholder="compony (optional)" value={state.compony} onChange={(e)=>Setstate({type:"compony",payload:e.target.value})} type="text"/>
            </FormControl>
            <FormControl>
                <Input placeholder="Adress" value={state.address} onChange={(e)=>Setstate({type:"address",payload:e.target.value})} type="text"/>
            </FormControl>
            <FormControl>
                <Input placeholder="Appartment,suite,etc(optional)" type="text"/>
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="City" isRequired>
                  <Input placeholder="City" type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="State"   isRequired>
                <Select placeholder='state' value={state.state} onChange={(e)=>Setstate({type:"state",payload:e.target.value})} variant='filled'>
                      <option disabled>state</option>
                      <option  value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AS">American Samoa</option>
                      <option  value="AZ">Arizona</option>
                      <option  value="AZ">Arizona</option>
                      <option value="DE">Delaware</option>
                      <option  value="FL">Florida</option>
                      <option  value="GU">Guam</option>
                      <option  value="HI">Hawaii</option>
                   </Select>
                </FormControl>
              </Box>
              <Box>
                <FormControl id="Zip Code" isRequired>
                  <Input placeholder='Zip Code' value={state.pincode} onChange={(e)=>Setstate({type:"pincode",payload:e.target.value})}  type="number" />
                </FormControl>
              </Box>
            </HStack>
            <Box>
                <FormControl id="Phone" isRequired>
                  <Input placeholder="Phone"  value={state.phone} onChange={(e)=>Setstate({type:"phone",payload:e.target.value})}type="number"/> 
                 </FormControl>
              </Box>
              </Stack>
              </Box>
     

        </Box>
    </Box>
  )
}

export default Checkout



