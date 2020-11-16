import React from "react";
import NextLink from "next/link";
import { Box, Container, Heading, Link, Stack } from "@chakra-ui/react"

import Provider from "src/components/Provider/Provider";

const Home = () => {
  return (
    <Provider>
      <Box d="flex" width="100%" height="100vh" bg="gray.50" alignItems="center" justifyItems="center">
        <Container maxWidth="500px" maxHeight="auto" centerContent>
          <Stack spacing={4} shouldWrapChildren>
            <Heading textAlign="center">Playground</Heading>

            <NextLink href="/signin" as="/signin">
              <Link href="/signin">Sign in with email</Link>
            </NextLink>

            <NextLink href="/signup" as="/signup">
              <Link href="/signup">Sign up with email</Link>
            </NextLink>
          </Stack>
        </Container>
      </Box>
    </Provider>
  )
}

export default Home;