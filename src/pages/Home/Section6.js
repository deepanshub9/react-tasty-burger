import React from 'react'
import { Container, Row, Carousel} from 'react-bootstrap'
import User1 from "../../assets/blog/review-author-1.jpg";
import User2 from "../../assets/blog/review-author-2.jpg";
import User3 from "../../assets/blog/review-author-3.jpg";
import User4 from "../../assets/blog/review-author-5.jpg";

function Section6() {
  return (
   <section className='blog_section'>
    <Container>
        <Row>
        <Carousel>
     
      <Carousel.Item>
        <Carousel.Caption>
         <div className='user_img'>
                <img src={User1} className='img-fluid' alt="User-1" />
            </div>
            <p>I had the most amazing experience at Testy Burger. The service was top-notch, and the burgers were the best I've ever had. The Flavor Burst Burger is a must-try! Fast delivery and friendly staff. Highly recommend! </p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY John Noble</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
         <div className='user_img'>
                <img src={User2} className='img-fluid' alt="User-2" />
            </div>
            <p>Testy Burger never disappoints! The burgers are always delicious and fresh. My kids love the Crispy Chicken burger, and I can't get enough of the Smokey. The delivery is always on time, and the staff is very courteous </p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY Mill Berry</h5>
        </Carousel.Caption>
      </Carousel.Item>
      
      <Carousel.Item>
        <Carousel.Caption>
         <div className='user_img'>
                <img src={User3} className='img-fluid' alt="User-3" />
            </div>
            <p>I 've tried many burger joints, but Testy Burger stands out. The quality of ingredients and the taste are unbeatable. The 30-minute delivery guarantee is a game-changer. It's our family's go-to place for burgers. </p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY Richard Frisby</h5>
        </Carousel.Caption>
      </Carousel.Item><Carousel.Item>
        <Carousel.Caption>
         <div className='user_img'>
                <img src={User4} className='img-fluid' alt="User-5" />
            </div>
            <p>The service at Testy Burger is fantastic. The staff is friendly, and the burgers are to die for. The Ultimate Bacon is my favorite, and the vegan options are great for my friends. Love this place! </p>
                <div className='item_rating mb-2'>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                    <i className='bi bi-star-fill'></i>
                </div>
                <h5>BY Komal Singh</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </Row>
    </Container>
   </section>
  )
}

export default Section6