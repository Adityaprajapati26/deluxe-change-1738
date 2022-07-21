import {
  Flex,
  Box,
  FormControl,

  Input,
  InputGroup,

  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,

  Checkbox,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";

import { getRegister } from "./../Redux/AuthReducer/action";

import { GET_USER_SUCCESS } from "./../Redux/AuthReducer/action.type";
export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [newUser, setNewUser] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  useEffect(() => {
    document.title = "Signup";
  }, []);
  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const handlePost = (e) => {
    const { name, value } = e.target;

    setNewUser({ ...newUser, [name]: value });
  };
  const handleRegistatioon = () => {
    dispatch(getRegister(newUser)).then((res) => {
      if (res === GET_USER_SUCCESS) {
        navigate("/login", { replace: true });
      }
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} width="100%">
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Create Account
          </Heading>
          {/* <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text> */}
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <Stack>
              <Box>
                <FormControl id="firstName" isRequired>
                  {/* <FormLabel>First Name</FormLabel> */}
                  <Input
                    type="text"
                    name="name"
                    placeholder="First Name"
                    onChange={handlePost}
                  />
                </FormControl>
              </Box>
              <Box>
                {/* <FormControl id="lastName">
                  <FormLabel>User Name</FormLabel>
                  <Input type="text" name="username" onChange={handlePost} />
                </FormControl> */}
              </Box>
            </Stack>
            <FormControl id="lastname" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                type="text"
                name="text"
                placeholder="Last Name"
                onChange={handlePost}
              />
            </FormControl>
            <FormControl id="email" isRequired>
              {/* <FormLabel>Email address</FormLabel> */}
              <Input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handlePost}
              />
            </FormControl>
            {/* <FormControl id="mobile" isRequired>
              <FormLabel>Mobile</FormLabel>
              <Input type="number" name="mobile" onChange={handlePost} />
            </FormControl> */}
            <FormControl id="password" isRequired>
              {/* <FormLabel>Password</FormLabel> */}
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  onChange={handlePost}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Checkbox>Subscribe for Newsletter</Checkbox>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={handleRegistatioon}
              >
                Create
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user? <RouterLink to="/login">Login</RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
