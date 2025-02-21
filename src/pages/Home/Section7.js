import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Section7() {
  return (
    <section className='contact_section'>
        <Container>
            <Row className='justify-content-center'>
                <Col sm={8} className='text-center'>
<h4>We Guarantee</h4>
<h2>30 Minute Delivery!</h2>
<p>Experience the speed and convenience of our delivery service. Your food arrives hot and delicious within 30 minutes, or it's free!
Explore Full Menu</p>

<Link to="/" className='btn btn_red px-4 py-2 rounded-0'>Call: +353 899 996 999 </Link>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Section7