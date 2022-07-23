import { Box, Flex, Grid, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link} from "react-router-dom";
import { getProduct} from "../Redux/Appreducer/action";
import { SimpleGrid } from '@chakra-ui/react'
const Homepage = () => {
  const products = useSelector((state)=>state.Appreducer.products);
  const dispatch = useDispatch();
  const[sort,setSort]=useState("asc")
  
const handleSort=(e)=>{
  setSort(e.target.value)
}
console.log(sort)

  useEffect(() => {


    dispatch(getProduct());
  }, [dispatch]);
  console.log(products, "products");
  return (
    <Box border="1px solid red" width="100%" marginLeft='0'>

      <Flex>
        <Text fontWeight="700" paddingRight="1rem">
          Sort by Price
        </Text>
        <RadioGroup value={sort} onClick={(e)=>handleSort(e)}>
          <Stack direction="row">
            <Radio value="asc">Low to High</Radio>
            <Radio value="desc">High to Low</Radio>
          </Stack>
        </RadioGroup>
      </Flex>

      <SimpleGrid marginTop={"25px"} columns={[2, 4]} spacing='10px'  >
      {products.sort((a,b)=>{
        if(sort=="asc")
        {
          return a.Price-b.Price
        }
        else if(sort=="desc")
        {
          return b.Price-a.Price
        }
        else{
          return 0
        }
      }).map((items,ind) => (
        <Box  key={ind}height="400px">
       <Link to={`/Product/${items.id}`}><Image w="200px" h="300px"  src={items.image}/></Link>
         <Text>{items.title}</Text>
        <Text>{"$"+items.Price+".00"}</Text>

        </Box>
      ))}
      </SimpleGrid>
   </Box>
  )
}

export default Homepage;
