import React, { useState } from 'react'
import { useEffect } from 'react';
import styled from 'styled-components'
import {popularProducts} from '../data'
import ProductItem from './ProductItem';
import axios from 'axios';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Product = ({category, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
    const getProducts = async ()=>{
      try{
        const res = await axios.get(category
          ? `http://localhost:5000/api/products?category=${category}`
          : "http://localhost:5000/api/products"
          );
        setProducts(res.data);
        console.log(res);
      }catch(err){

      };
    }
    getProducts();
  },[category]);

  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, category, filters]);

  useEffect(() => {
    if (sort === "Newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
        {category
        ? filteredProducts.map((item) => <ProductItem item={item} key={item.id} />)
        : popularProducts.map((item) => <ProductItem item={item} key={item.id} />)}
    </Container>
  )
}

export default Product