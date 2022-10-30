import React from 'react'
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button
} from '@chakra-ui/react'
import {useDisclosure} from '@chakra-ui/react'
export const CheckoutMessage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  return (
    <>
    <Button colorScheme='green' onClick={onOpen}>
      Delete Customer
    </Button>

    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize='lg' fontWeight='bold'>
            Checkout
          </AlertDialogHeader>

          <AlertDialogBody>
            Are you sure? You Want to Checkout.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='green' onClick={onClose} ml={3}>
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  </>
  )
}
