import { Box, Flex, Grid, Image, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsData, getSortData } from "../Redux/action";

const Homepage = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleSort = (e) => {
    console.log(e.target.value);
    if (e.target.value === "asc") {
      const ascData = products.sort((a, b) => a.price - b.price);
      console.log("clicked", ascData);
      dispatch(getSortData(ascData));
    } else if (e.target.value === "desc") {
      const descData = products.sort((a, b) => b.price - a.price);
      dispatch(getSortData(descData));
      console.log(descData, "desc");
    }
  };

  useEffect(() => {
    dispatch(getProductsData());
  }, [dispatch]);
  console.log(products, "products");
  return (
    <Box border="1px solid red" width="100%" marginLeft='0'>
      <Flex>
        <Text fontWeight="700" paddingRight="1rem">
          Sort by Price
        </Text>
        <RadioGroup onClick={handleSort}>
          <Stack direction="row">
            <Radio value="asc">Low to High</Radio>
            <Radio value="desc">High to Low</Radio>
          </Stack>
        </RadioGroup>
      </Flex>



      <Grid templateColumns='repeat(4, 1fr)' gap={4}>

      {products.map((items,ind) => (
        <Box boxSize="l" key={ind}>
        <Image src={items.image}/>
        <Text>{items.title}</Text>
        <Text>{"$"+items.Price+".00"}</Text>

        </Box>
      ))}
  
        </Grid>


    

    </Box>
  );
};

export default Homepage;
