import {
    Alert,
    Box,
    Button,
    Image,
    Text,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Textarea,
} from '@chakra-ui/react';
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';
import { useBasket } from '../../contexts/BasketContext'

function Basket() {
    const [address, setAddress] = useState('');

    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);

    const { items, removeFromBasket, emptyBasket } = useBasket();

    const total = items.reduce((acc, obj) => acc + obj.price, 0);

    const handleSubmitForm = async () => {
        const itemsIds = items.map((item) => item._id);

        const input = {
            address,
            items: JSON.stringify(itemsIds),
        };

        await postOrder(input);

        emptyBasket();
        onClose();
    }
    return (
        <Box p={4} ms={2} fontSize={18}>
            {items.length < 1 && <Alert status='warning'>You have not any items your basket.</Alert>}

            {items.length > 0 && (
                <>
                    <ul style={{ listStyleType: 'decimal' }}>
                        {items.map((item) => (
                            <li key={item._id} style={{ marginBottom: 15 }}>
                                <Link to={`/product/${item._id}`}>
                                    <Text>
                                        {item.title} - {item.price} TL
                                    </Text>
                                    <Image
                                        htmlWidth={200}
                                        loading='lazy'
                                        src={item.photos[0]}
                                        alt='basket item'
                                    />
                                </Link>

                                <Button
                                    mt={2}
                                    size='sm'
                                    colorScheme={'purple'}
                                    onClick={() => removeFromBasket(item._id)}>
                                    Remove from basket
                                </Button>
                            </li>
                        ))}
                        <Box mt='10'>
                            <Text fontSize={22}>
                                Total: {total} TL
                            </Text>
                        </Box>
                    </ul>

                    <Button mt={2} size='sm' colorScheme={'green'} onClick={onOpen}>Order</Button>

                    <Modal
                        initialFocusRef={initialRef}
                        isOpen={isOpen}
                        onClose={onClose}
                    >
                        <ModalOverlay />
                        <ModalContent>
                            <ModalHeader>Create your account</ModalHeader>
                            <ModalCloseButton />
                            <ModalBody pb={6}>
                                <FormControl>
                                    <FormLabel>Address</FormLabel>
                                    <Textarea
                                        ref={initialRef}
                                        placeholder='Address'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </FormControl>
                            </ModalBody>

                            <ModalFooter>
                                <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
                                    Save
                                </Button>
                                <Button onClick={onClose}>Cancel</Button>
                            </ModalFooter>
                        </ModalContent>
                    </Modal>
                </>
            )}
        </Box>
    )
}

export default Basket