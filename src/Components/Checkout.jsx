import React from 'react'
import { Avatar, Box,Button,Center,Checkbox,Flex,FormControl,FormLabel,Heading,HStack,Image, Input, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Select, Text, WrapItem } from '@chakra-ui/react'
import {ChevronRightIcon} from "@chakra-ui/icons"
const Checkout = () => {
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
              <Box  marginTop={"10px"} border={"1px solid black"} h="-moz-max-content" w="80%" >
                <FormControl>
                   <Select placeholder='Country/Region' variant='filled'>
                      <option value='USA'>United States</option>
                   </Select>
                </FormControl>
                <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <Input placeholder="Firstname" type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <Input placeholder='Lastname' type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl>
                <Input placeholder="compony (optional)" type="text"/>
            </FormControl>
            <FormControl>
                <Input placeholder="Adress" type="text"/>
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
                <FormControl id="State" isRequired>
                <Select placeholder='state' variant='filled'>
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
                  <Input placeholder='Zip Code' type="number" />
                </FormControl>
              </Box>
            </HStack>
            <Box>
                <FormControl id="Phone" isRequired>
                  <Input placeholder="Phone" type="number"/> 
                 </FormControl>
              </Box>
              </Box>
     

        </Box>
    </Box>
  )
}

export default Checkout
