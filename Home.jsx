import React from "react";
import CardItem from "./card";
import {Container } from 'react-bootstrap';
import Header from "./Header";


const Home = () => {
    return (
      <>
     
      <div className="vh-90">
      <Container className="mt-5 d-flex flex-wrap justify-content-center align-items-cente">
        
        <CardItem 
           src="/images/tajmahal.jfif"
           title="Tajmahal"
           location="located in Agra, India" />
        <CardItem 
           src="/images/boat.jfif"
           title="Varkala"
           location="located in Kerala, India" />
        <CardItem 
           src="/images/paris.jfif"
           title="Eiffel Tower"
           location="located in Paris, France" />

        
        </Container>
        </div>
        </>
       
        


    )
}

export default Home;