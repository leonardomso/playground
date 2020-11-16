import React from "react";
import NextLink from "next/link";
import { Box, Container, Heading, Link, Stack, Input, Button } from "@chakra-ui/react"

import Provider from "src/components/Provider/Provider";

const SignIn = () => {
  return (
    <Provider>
      <Box d="flex" width="100%" height="100vh" bg="gray.50" alignItems="center" justifyItems="center">
        <Container maxWidth="500px" maxHeight="auto" centerContent>
          <Stack width="100%" spacing={4} shouldWrapChildren>
            <Heading textAlign="center">Sign In</Heading>

            <Input placeholder="Email address" />
            <Input placeholder="Password" />
            <Button width="100%">Sign in</Button>

            <NextLink href="/signup" as="/signup">
              <Link href="/signup" textAlign="center">Don't have an account? Sign up</Link>
            </NextLink>
          </Stack>
        </Container>
      </Box>
    </Provider>
  )
}

export default SignIn;