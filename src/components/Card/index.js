import React from 'react'
import { Box, Image, Button } from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function Card() {
  return (
    <Box borderRadius="1px" borderWidth="lg" overflow="hidden" p="3">
        <Link to="#/">
            <Image src='https://picsum.photos/id/1/400/200' alt='product' />
            <Box p="6">
                <Box d="flex" alignItems="baseLine">
                    27/10/2022
                </Box>
                <Box mt="1" fontWeight="semibold" as="h4">
                    Macbook Pro
                </Box>
                <Box>
                    100 TL
                </Box>
            </Box>
        </Link>

        <Button colorScheme="purple">Add to basket</Button>
    </Box>
  )
}

export default Card