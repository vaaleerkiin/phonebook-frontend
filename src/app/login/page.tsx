"use client";

import {
  Box,
  Button,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
} from "@chakra-ui/react";
import { signIn, useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

export default function Login() {
  const session = useSession();
  const router = useRouter();
  const [authData, setAuthData] = useState<any>();
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(!show);
  const toast = useToast();
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (values) => {
    const res = await signIn("login", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: callbackUrl,
    })
      .then((res) => {
        if (res?.error) {
          toast({
            position: "top",
            description: JSON.parse(res.error)?.message,
            status: "error",
            duration: 9000,
            isClosable: true,
          });
          throw new Error();
        } else {
          toast({
            position: "top",
            description: "Success",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
        return res;
      })
      .then(setAuthData);
  };

  useEffect(() => {
    if (session.status === "authenticated" && authData?.ok && authData?.url) {
      router.push(callbackUrl);
    }
  }, [authData, session, router, callbackUrl]);

  return (
    <Container as="section" pt="50px" minH="calc(100vh - 128px)">
      <Box maxW="600px" bgColor="white" borderRadius="12px">
        <Heading textAlign="center" pt="20px" as="h2" size="lg">
          Login
        </Heading>
        <Box
          as="form"
          onSubmit={handleSubmit(onSubmit)}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="16px 24px"
        >
          <FormControl isInvalid={!!errors.email} pb="4px">
            <FormLabel htmlFor="email" fontSize="16px">
              Email
            </FormLabel>
            <Input
              id="email"
              placeholder="Enter email"
              {...register("email", {
                required: "This is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password" fontSize="16px">
              Password
            </FormLabel>
            <InputGroup size="md">
              <Input
                id="password"
                placeholder="Enter password"
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "This is required",
                  minLength: {
                    value: 4,
                    message: "Minimum length should be 4",
                  },
                })}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShow}>
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="blue"
            isLoading={session.status == "loading"}
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
