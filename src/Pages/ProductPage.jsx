import { Container } from '@chakra-ui/react'
import React from 'react'
import { ProductCard } from '../Components/ProductCard'

export const ProductPage = () => {
    return (
        <Container maxW={"90%"} mt="20px"
            display={'flex'}
            alignItems='center'
            justifyContent={'center'}
            flexWrap='wrap'
            gap={'20px'}
      >
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
    </Container>
  )
}
