import React from 'react'
import './Projectpackery.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import projects1 from '../../assets/images/1 (1).jpg'
import projects2 from '../../assets/images/2 (1).jpg'
import projects3 from '../../assets/images/3 (1).jpg'
import projects4 from '../../assets/images/4.jpg'
import projects5 from '../../assets/images/5.jpg'
import projects6 from '../../assets/images/6.jpg'
import projects7 from '../../assets/images/7.jpg'
import projects8 from '../../assets/images/8.jpg'
import Carousel from 'react-bootstrap/Carousel';
import slid from'../../assets/images/bg_t_21.png'








const Projectpackery = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
   <div className='projects packery'>
    <div className='running_project'>
   
     <div className='largefont_gallery'>
        <h2 data-aos="fade-right" data-aos-duration="1500">GALLERY</h2>
     </div>
     <div className='container'>
     <div class="section-header text-center has_line">
                        <h5 class="text-white">Project Gallery</h5>
                        <div class="section-desc row align-items-center justify-content-center">
                            <div class="col-lg-6 text-end">
                                <p>We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion.</p>
                            </div>
                            <div class="col-lg-6 text-start">
                                <p>We will continue to grow and evolve Mrittik for the betterment of our clients and our people. Vision includes the continual expansion.</p>
                            </div>
                        </div>
     </div>
     <div className='packery_images'>
        {/* projecimg1 */}
        <div className='row'>
            <div className='leadall col-12 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="zoom-in-up" src={projects1} alt="" />
                </div>
            </div>
        </div>

{/* projectimg2 */}
        <div className='row'>
            <div className='leadall col-6 '>
                <div className='imglead'>
                    <img className='imagelead_item'  data-aos="fade-up-right" src={projects2} alt="" />
                </div>
            </div>

            <div className='leadall col-6 '>
                <div className='imglead'>
                    <img className='imagelead_item'  data-aos="fade-up-left" src={projects3} alt="" />
                </div>
            </div>
        </div>
        {/* projectimg3  */}
        <div className='row'>
            <div className='leadall col-12 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" src={projects4} alt="" />
                </div>
            </div>
        </div>
        {/* projectimg4  */}
        <div className='row'>
            <div className='leadall col-6 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="zoom-in-right" src={projects5} alt="" />
                </div>
            </div>

            <div className='leadall col-6 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src={projects6} alt="" />
                </div>
            </div>
        </div>
        {/* projectimg4  */}
        <div className='row'>
            <div className='leadall col-12 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="zoom-in-right" src={projects7} alt="" />
                </div>
            </div>
        </div>
         {/* projectimg5  */}
         <div className='row'>
            <div className='leadall col-12 '>
                <div className='imglead'>
                    <img className='imagelead_item' data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" src={projects8} alt="" />
                </div>
            </div>
        </div>
     </div>
     <div class="olivebtn_group mt-4 w-100 text-center">
      <button id="load-more" class="olivebtn olive w-100">Show More Project(s)</button>
     </div>
     <div className='black_box'>
     <Carousel data-bs-theme="dark">
      <Carousel.Item className='slider_black'>
      <img
          className="d-block w-100 image_black"
          src={slid}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className='bs_para'>We prioritize your needs, ensuring every project is delivered on time, within budget, and to your satisfaction.</p>
          <div className='bs_title'>ASK & ASSOCIATES, BHIWANDI</div>
        </Carousel.Caption>

      </Carousel.Item>
      <Carousel.Item className='slider_black'>
        <img
          className="d-block w-100 image_black"
          src={slid}
          alt="Second slide"
        />
        <Carousel.Caption>
          <p className='bs_para'>Building a greener future with sustainable design and construction practices that reduce environmental impact.</p>
          <div className='bs_title'>ASK & ASSOCIATES, BHIWANDI</div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='slider_black'>
      <img
          className="d-block w-100 image_black"
          src={slid}
          alt="Second slide"
        />
        <Carousel.Caption>
        <p className='bs_para'>Crafting modern and timeless architectural solutions tailored to meet your unique vision.
</p>
          <div className='bs_title'>ASK & ASSOCIATES, BHIWANDI</div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

     </div>
     </div>
    </div>
    </div>
  )
}

export default Projectpackery