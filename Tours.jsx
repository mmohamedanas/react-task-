import React from 'react'
import CardItem from "./card";
import {Container } from 'react-bootstrap';

const Tours = () => {
  return (
    <div className="vh-90">
    <Container className="mt-5 d-flex flex-wrap justify-content-center align-items-center">
      
      <CardItem 
         src="/images/great-wall.jfif"
         title="Great Wall"
         location="located near Beijing, China"
         className="mb-5" />
      <CardItem 
         src="/images/paris.jfif"
         title="Eiffle tower"
         location="located in paris,france"
         className="mb-5" />
      <CardItem 
         src="/images/island.jfif"
         title="temple"
         location="located in china"
         className="mb-5" />

      
      </Container>
      </div>
  )
}

export default Tours