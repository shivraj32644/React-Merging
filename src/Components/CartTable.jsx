import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

export const CartTable = () => {
    
  return (
    <TableContainer>
    <Table variant='simple'>
      <TableCaption>All Cart Items</TableCaption>
      <Thead>
        <Tr>
          <Th>Category</Th>
          <Th>Product Name</Th>
          <Th isNumeric>Quantity</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>Clothes</Td>
          <Td>T-shirt</Td>
          <Td isNumeric>₹ 900</Td>
        </Tr>
        <Tr>
          <Td>Mobile</Td>
          <Td>I phone 14 </Td>
          <Td isNumeric>₹ 1,14,000</Td>
        </Tr>
        <Tr>
          <Td>Laptop</Td>
          <Td>Mac Book pro</Td>
          <Td isNumeric>₹ 2,20,200  </Td>
        </Tr>
      </Tbody>
      <Tfoot>
        <Tr>
          <Th></Th>
          <Th>Total</Th>
          <Th isNumeric>3,34,900</Th>
        </Tr>
      </Tfoot>
    </Table>
  </TableContainer>
  )
}
