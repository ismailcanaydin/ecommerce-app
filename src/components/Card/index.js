import React from 'react'
import { Box, Image, Button, GridItem } from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import moment from 'moment'


function Card({ item }) {
    return (
        <Box borderRadius="1px" borderWidth="lg" overflow="hidden" p="3">
            <Link to="#/">
                <Image src={item.photos[0]} alt='product' loading='lazy' />
                <Box p="6">
                    <Box d="flex" alignItems="baseLine">
                        {moment(item.createdAt).format("DD/MM/YYYY")}
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4">
                        {item.title}
                    </Box>
                    <Box>
                        {item.price} TL
                    </Box>
                </Box>
            </Link>

            <Button colorScheme="purple">Add to basket</Button>
        </Box>
    )
}

export default Card