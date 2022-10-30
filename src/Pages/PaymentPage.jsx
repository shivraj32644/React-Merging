import React from "react";
import { CartTable } from "../Components/CartTable";
import { Container } from "@chakra-ui/react";
import { CheckoutMessage } from "../Components/CheckoutMessage";

export const PaymentPage = () => {
  return (
    <Container maxW="80%" mt="50px">
      <CartTable />
      <CheckoutMessage />
    </Container>
  );
};
