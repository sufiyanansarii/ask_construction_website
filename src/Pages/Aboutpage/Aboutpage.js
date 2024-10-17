import React from 'react'
import './Aboutpage.css'
import CursorFollower from '../../Components/CursorFollower/CursorFollower'
import Navigation from '../../Components/Navigation/Navigation'
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.svg'
import about_f1 from '../../assets/images/about_flex_1.svg'
import about_f2 from '../../assets/svg/i1.svg'
import about_f3 from '../../assets/svg/i3.svg'
import about_f4 from '../../assets/svg/i4.svg'
import { useEffect } from 'react';
const Aboutpage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
  return (
    <div className='Aboutpage'>
        <CursorFollower /> 
        <Navigation />
        <div className='about-inner-main'>
                <div className='container d-flex align-items-center'>
                     <div className='about-p-heading'>
                     <h2 className='pp-heading' data-aos="fade-down-right">about us</h2>
                     </div>
                     
                </div>
                     <div className='container'>
                     <div className='about_info'>
        <div>
          {/* <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">ABOUT</h2> */}
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12 col-md-5 col-lg-5'>
                <div className='about_image'>
                  <img src={about1} alt="" />
                  <img data-aos="fade-up"
     data-aos-duration="3000" src={about2} alt="" />

                </div>
              </div>
              <div className=' col-sm-12 col-md-6 col-lg-7'>
                <div className='about_inner_text'>
                <div className='about_text'>
                  <h3>ABOUT ASK & ASSOCIATES</h3>
                 <p className='about_p'>
                 With years of experience in the field, our team brings together a diverse blend of skills, creativity, and
technical prowess. From conceptualization to realization, we offer a comprehensive suite of 3D
architectural design services that cater to various sectors including residential, commercial, hospitality,
and more. Our expertise encompasses:
<br />
1. Residential Design: Crafting innovative and functional living spaces that cater to the unique
needs and aspirations of our clients. <br />
2. Commercial Design: Designing cutting-edge commercial spaces that inspire productivity,
collaboration, and brand identity
                  </p>
                  </div>
                </div>
                <div className='about_icon_box'>
                  <div className='row'>
                    <div className='col-lg-6'>
                      <div className='icon_box_flex'>
                        <div className='icon_size'>
                          <img src={about_f1} alt="" />
                        </div>
                        <h6>URBAN DESIGN</h6>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='icon_box_flex'>
                        <div className='icon_size'>
                          <img src={about_f2} alt="" />
                        </div>
                        <h6>ARCHITECTURE</h6>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='icon_box_flex'>
                        <div className='icon_size'>
                          <img src={about_f2} alt="" />
                        </div>
                        <h6>3D SPACE DESIGN</h6>
                      </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='icon_box_flex'>
                        <div className='icon_size'>
                          <img src={about_f4} alt="" />
                        </div>
                        <h6>INTERRIOR</h6>
                      </div>
                    </div>
                  </div>
                  {/* <div className='read gray'>
                    <a   href="#">
                      Read More
                    </a>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
                    </div>
                     </div>
    </div>
    </div>

  )
}

export default Aboutpage