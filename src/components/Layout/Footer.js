import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Footer() {
  // Scroll state
  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
  };
 

const listenToScroll = () => {
  let heightToHidden = 250;
  const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

  windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
}

useEffect(() => {
  window.addEventListener("scroll", listenToScroll);
});


  
  
  return (
<>

<footer>
  
   <Container><Row>
    <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
    <div className='text-center'>
      <h5>Location</h5>
      <p>Ring road, City Center</p>
      <p>Waterford City, Eircode X91 HXT3</p>
      <p>Ireland</p>
    </div>
   </Col>
   
   <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
    <div className='text-center'>
      <h5>Working Hours</h5>
      <p>Mon-Fri: 9:00AM - 10:00PM </p>
      <p>Saturday: 10:00AM - 8:30PM</p>
      <p>Sunday: 12:00PM - 5:00PM</p>
    </div>
   </Col>

   <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
    <div className='text-center'>
      <h5>Order Now</h5>
      <p>Conveniently order through our website or mobile app.</p>
      <p><Link to="tel:899 999 699" className='calling'>899 999 699</Link> </p>
    </div>
   </Col>

   <Col sm={6} lg={3} className='mb-4 mb-lg-0'>
    <div className='text-center'>
      <h5>Fellow US</h5>
      <p>Stay updated with our latest news, promotions, and delicious offers. </p>
     <ul className='list-unstyle text-center mt-2'>
      <li>
        <Link to="/">
        <i className='bi bi-facebook'></i></Link>
      </li>
      <li>
        <Link to="/">
        <i className='bi bi-twitter'></i></Link>
      </li>
      <li>
        <Link to="/">
        <i className='bi bi-instagram'></i></Link>
      </li>
      <li>
        <Link to="/">
        <i className='bi bi-youtube'></i></Link>
      </li>
     </ul>
      
    </div>
   </Col>

   </Row>
   <Row className='copy_right'>
    <Col>
    <div>
      <ul className='list-unstyled text-center mb-0'>
      <li>
        <Link to="/">
        © 2025 <span>Testy Burger.com</span>. All Rights Reserved</Link>
      </li>
      <li>
        <Link to="/"> About US</Link>
      </li>
      <li>
        <Link to="/">
        Terms of Use</Link>
      </li>
      <li>
        <Link to="/">
      Privacy Policy</Link>
      </li>
      </ul>
    </div>
    </Col>

   </Row>
   </Container>
  

   </footer>
  
{/* {scroll to top} */}

{isVisible && (<div className='scroll_top' onClick={scrollTop}>
  <i class="bi bi-arrow-up"></i>
</div> )}



</>
  ); 
}

export default Footer