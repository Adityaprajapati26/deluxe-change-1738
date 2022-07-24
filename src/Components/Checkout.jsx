import React, { useReducer } from 'react'
import { Avatar, Box,Button,Center,Checkbox,Divider,Flex,FormControl,FormLabel,Heading,HStack,Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, Stack, Text, useDisclosure, WrapItem } from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import {useNavigate} from "react-router-dom"
function reducer(state,action){
  switch(action.type){
  case'firdt':{
    return{
      ...state,
      first:action.payload,
    }
  }
  case'last':{
    return{
      ...state,
      last:action.payload
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
   first:"",
   last:"",
   company:"",
   address:"",
   state:"",
   pincode:"",
  city:"",
  country:"",
}
let data=[
  {
      "id":1,
      "title":"Rays Of Light Hoops",
      "Price":16,
      "tag":"Earrings",
      "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011000098-2__43894_823x.jpg?v=1645115759",
      "Count":1
    },
    {
      "id":2,
      "title":"Daisy Post Earrings",
      "Price":16,
      "tag":"Earrings",
      "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101015-1_1100x.jpg?v=1646760637",
      "Count":1
    },
    {
      "id":3,
      "title":"Maryland Crab Earrings",
      "Price":15,
      "tag":"Earrings",
      "image":"https://cdn.shopify.com/s/files/1/0627/7388/7215/products/011300002-2__23761_823x.jpg?v=1645110224",
      "Count":1
    },
 
]


const Checkout = () => {
  const[state,Setstate]=useReducer(reducer,initstate)
  const navigate=useNavigate()
  // const data=useSelector()
  // const data=useSelector((state)=>state.handlecart)

  const OverlayTwo = () => (
    <ModalOverlay
      bg='none'
      backdropFilter='auto'
      backdropInvert='80%'
      backdropBlur='2px'
    />
  )
  const {  isOpen,onOpen} = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayTwo />)
  const onClose=()=>{
    
    setTimeout(()=>{
      navigate("/")
       },3000)
      
    
 }
  
  return (
    <Box  display="flex">
        
      
          
        <Box margin="10vh" w="50%"  padding="5px">
           <Image  h="80px"  src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2.png?v=1645644264" />
           <Flex display="flex">
           <Center h="20px"><Text fontSize={"10px"}>Cart<ChevronRightIcon boxSize={"15px"}/> Information<ChevronRightIcon boxSize={"15px"}/>Shipping<ChevronRightIcon boxSize={"15px"}/>Payment</Text></Center>
           </Flex>
           <Box h={"100px"} w="90%"   borderRadius={"5px"}>
            <Text align={"center"}>Express Checkout</Text>
            <Box   margin="auto" w="100%" h="10vh">
                <Flex justifyContent={"space-around"} alignItems="center" paddingTop={"10px"}> 
                <Box h="50px" w="180px"   borderRadius={"5px"}><Image h="48px" w="178px" src='https://www.pagetraffic.com/blog/wp-content/uploads/2022/05/about-shop-pay-1536x806.jpg'/></Box>
                <Box  h="50px" w="180px"  borderRadius={"5px"}><Image  h="48px" w="178px"src='https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg'/></Box>
                <Box  h="50px" w="180px"  align="center" borderRadius={"5px"}> <Image h="45px" w="178px"  src='https://www.deccanherald.com/sites/dh/files/styles/article_detail/public/articleimages/2022/03/30/google-pay-crs-1-1096059-1648632689.jpg?itok=Nt6gBe2W'/> </Box>
                </Flex>
             </Box>
            </Box>
            <Box  w="400px" >
                <Text>Contack Information</Text>
                <Flex justifyContent={"space-around"}> 
                <WrapItem marginTop={"10px"}>
               <Avatar size='md'  />
               </WrapItem>
               <Box w="80%" >
                  <Text>name(id)</Text>
                  <Button h="25px">Logout</Button>
               </Box>
                </Flex>
                <Checkbox>Email Me with new and Offers</Checkbox>
               </Box>
              <Box  marginTop={"10px"}  h="500px" w="100%" gap={"30px"} >
                <Text size={"25px"}>Shipping Address</Text>
                <Stack marginTop={"20px"} spacing="15px">
                <FormControl  >
                   <Select h={"50px"} placeholder='Country/Region' value={state.country} onChange={(e)=>Setstate({type:"country",payload:e.target.value})} variant='filled'>
                      <option value='USA'>United States</option>
                   </Select>
                </FormControl>
                <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <Input h={"50px"} placeholder="Firstname" type="text"  value={state.first} onChange={(e)=>Setstate({type:"first",payload:e.target.value})} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <Input  h={"50px"}placeholder='Lastname' type="text"  value={state.clast} onChange={(e)=>Setstate({type:"last",payload:e.target.value})} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
                <Input h={"50px"} placeholder="compony (optional)" type="text"  value={state.compony} onChange={(e)=>Setstate({type:"compony",payload:e.target.value})} />
            </FormControl>
            <FormControl>
                <Input h={"50px"}placeholder="Adress" type="text"  value={state.address} onChange={(e)=>Setstate({type:"address",payload:e.target.value})}/>
            </FormControl>
            <FormControl>
                <Input h={"50px"} placeholder="Appartment,suite,etc(optional)" type="text" />
            </FormControl>
            <HStack>
              <Box>
                <FormControl id="City" isRequired>
                  <Input  h={"50px"}placeholder="City" type="text"  value={state.city} onChange={(e)=>Setstate({type:"city",payload:e.target.value})} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="State" isRequired>
                <Select placeholder='state' variant='filled' h={"50px"}  value={state.state} onChange={(e)=>Setstate({type:"state",payload:e.target.value})}   >
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
                <FormControl h={"50px"} id="Zip Code" isRequired>
                  <Input placeholder='Zip Code' type="number"  value={state.pincode} onChange={(e)=>Setstate({type:"pincode",payload:e.target.value})} />
                </FormControl>
              </Box>
            </HStack>
            <Box>
                <FormControl id="Phone" isRequired>
                  <Input h={"50px"} placeholder="Phone" type="number"  value={state.phone} onChange={(e)=>Setstate({type:"phone",payload:e.target.value})}/> 
                 </FormControl>
              </Box>
              </Stack>
              </Box>
             <Box display={"flex"} justifyContent="space-between" margin="15px">
              <Text>Return to Shoping</Text>
              <Button
                  ml='4'
                    onClick={() => {
                   setOverlay(<OverlayTwo />)
                    onOpen()
                        }}
                   >
               Pay
                      </Button>
             </Box>
           
        </Box>
             
        

             <Box marginTop={"10vh"} width="50%" marginRight={"15px"}  >
           
              {/* Map the Data  with useSelector*/}
              {/* <Image src="" border="1px solid red" w="150px" h="150px"/> */}
              <Box>
                {data.map((data)=>(
                  <Box border ="1px solid black" marginTop="10px"w="100%" display={"flex"} justifyContent="space-around" h="200px">
                    <Image src={data.image}  w="150px" />
                    <Box  marginLeft={"15px"} fontSize="30px" w="60%" textAlign={"center"} >
                      <Text>{data.title}</Text>
                          <Text>{data.tag}</Text>
                              <Text>${data.Price}</Text>
              
                              
                      </Box>
                  </Box>
                ))}
                 <Text fontSize={"35px"}>Total Price</Text><Text fontSize={"35px"}>$40</Text>
              </Box>
            

              
             </Box>

         {/* model */}
         <Modal isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Payment is Succesfull</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Amount</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={()=>onClose()}>Back to Shopping</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
         {/* model */}

    </Box>
  )
}

export default Checkout



