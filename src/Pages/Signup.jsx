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
import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import { REGISTER_SUCCESS } from "../Redux/AuthReducer/actionTypes";

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.payload,
      };

    case "email":
      return {
        ...state,
        email: action.payload,
      };

    case "password":
      return {
        ...state,
        password: action.payload,
      };

    case "username":
      return {
        ...state,
        username: action.payload,
      };

    case "mobile":
      return {
        ...state,
        mobile: action.payload,
      };

    case "description":
      return {
        ...state,
        description: action.payload,
      };

    default:
      return state;
  }
}

const initialState = {
  name: "",
  email: "",
  password: "",
  username: "",
  description: "",
};

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  // const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setter] = useReducer(reducer, initialState);
  // console.log("state--", state);


  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupHandler = () => {
    dispatch(register(state)).then((r) => {
      if (r === REGISTER_SUCCESS) {
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
            Create account
          </Heading>
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
                <FormControl id="Name" isRequired>
                  <Input
                    type="text"
                    value={state.name}
                    placeholder="Full Name"
                    onChange={(e) =>
                      setter({ type: "name", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="username" isRequired>
                  <Input
                    type="text"
                    value={state.username}
                    placeholder="username"
                    onChange={(e) =>
                      setter({ type: "username", payload: e.target.value })
                    }
                  />
                </FormControl>
              </Box>
            </Stack>
            <FormControl id="email" isRequired>
              <Input
                type="email"
                value={state.email}
                placeholder="email"
                onChange={(e) =>
                  setter({ type: "email", payload: e.target.value })
                }
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={state.password}
                  placeholder="password"
                  onChange={(e) =>
                    //  dispatch({ type: "password", payload: e.target.value })
                    setter({ type: "password", payload: e.target.value })
                  }
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

            <Box>
              <FormControl id="mobile" isRequired>
                <Input
                  type="number"
                  value={state.mobile}
                  placeholder="Mobile No"
                  onChange={(e) =>
                    setter({ type: "mobile", payload: e.target.value })
                  }
                />
              </FormControl>
            </Box>

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
                onClick={signupHandler}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <RouterLink to="/login" color={"blue.400"}>
                  Login
                </RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
