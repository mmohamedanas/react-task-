import React from 'react';
import CardItem from "./card";
import {Container } from 'react-bootstrap';

const About = () => {
  return (
    
    <div className="vh-90">
    <Container className="mt-5 d-flex flex-wrap justify-content-center align-items-cente">
      
      <CardItem 
         src="/images/petra.jfif"
         title="Petra, Jordan"
         location="located in a remote valley" />
      <CardItem 
         src="/images/statue-Christ.jfif"
         title="Christ the Redeemer"
         location="located in Rio de Janeiro." />
      <CardItem 
         src="/images/Machu-Picchu.jfif"
         title="Machu Picchu"
         location="located in Cuzco, Peru" />

      
      </Container>
      </div>
      
     
      
  )
}

export default About