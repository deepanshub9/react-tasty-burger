import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PromotionImage from "../../assets/promotion/pro.png"



function Section4() {
  return (
   <>
   <section className='promotion_section'>
    <Container>
        <Row className='align-items-center'>
            <Col lg={6} className='text-center mb-5 mb-lg-0'>
            <img src={PromotionImage} className='img_fluid1' alt='PromotionImage' />
            </Col>

        <Col lg={6} className='px-5'>
        <h2>
        Bringing People Together with Great Burgers
</h2>
<p>Nothing brings people together like a good burger. At our restaurant, we believe in the magic of sharing delicious meals with loved ones. Our burgers are crafted with the finest ingredients to create unforgettable dining experiences.
</p>
<ul>
    <li> <p><b>Quality Ingredients:</b> We source the best ingredients to ensure every bite is a burst of flavor. Fresh, tasty, and wholesome
</p></li>

<li><p> <b>Unbeatable Taste:</b>
Our secret recipes and unique combinations guarantee a delightful and satisfying meal every time.
</p></li>

<li><p> <b>Community Focus:</b>
We love seeing families and friends gather to enjoy our food. It's all about creating cherished memories together.

</p></li></ul>
<p>At our restaurant, every burger is made with love and served with a smile. Visit us today and taste the difference!</p>
          </Col>

        </Row>
    </Container>

   </section>


    {/* BG parallax scroll */}
    <section className='bg_parallax_scroll'></section>






   </>


  );
}

export default Section4