import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Pizza from "../../assets/about/pizza.png";
import Salad from "../../assets/about/salad.png";
import Delivery from "../../assets/about/delivery-bike.png";


// Mock Data Cards
const mockData = [
  {
    image: Pizza,
    title: "Original",
    paragraph: `Discover the authentic taste of our Original Burger, made with the freshest ingredients and cooked to perfection.`,
  },
  {
    image: Salad,
    title: "Qualty Foods",
    paragraph: `Experience the excellence of our Quality Foods, prepared with care and the finest ingredients to ensure every bite is unforgettable`,
  },
  {
    image: Delivery,
    title: "Fastest Delivery",
    paragraph: `Get your favorite burgers delivered to your doorstep in no time! Our Fastest Delivery ensures you enjoy hot and fresh meals.`,
  },
  // Add more mock data objects as needed
];


function Section2() {
  return (
    <>
    <section className='about_section'>
        <Container>
    <Row>
        <Col lg={{span:8, offset:2}} className='text-center'>
        <h2>The burger tastes better when you eat it with your&nbsp;family</h2>
        <p>Discover the authentic taste of our Original Burger, made with the freshest ingredients and cooked to perfection.
</p>       
<Link to="/" className='btn order_now btn_red'>Explore Full Menu</Link>
         </Col>
    </Row>
        </Container>
    </section>


<section className='about_wrapper'>
    <Container> <Row className='justify-content-md-center'> 
        {mockData.map((cardData, index) => (
            <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
              <div className='about_box text-center'>
                <div className='about_icon'>
                  <img src={cardData.image} className='img-fluid' alt='icon' />  
                </div>
            <h4>{cardData.title}</h4>
            <p>{cardData.paragraph}</p>

                </div>  
            </Col>
        ))}
        </Row></Container>

</section>


</>


  );
}

export default Section2