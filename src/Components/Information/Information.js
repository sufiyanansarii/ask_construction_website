import React from 'react'
import './Information.css'
import d1 from '../../assets/svg/d1.svg'
import about1 from '../../assets/images/about1.jpg'
import about2 from '../../assets/images/about2.svg'
import about_f1 from '../../assets/images/about_flex_1.svg'
import about_f2 from '../../assets/svg/i1.svg'
import about_f3 from '../../assets/svg/i3.svg'
import about_f4 from '../../assets/svg/i4.svg'
import CountUp from 'react-countup';
import fun1 from '../../assets/images/fact-1.png'
import fun2 from '../../assets/images/fact-2.png'
import fun3 from '../../assets/images/fact-3.png'
import fun4 from '../../assets/images/fact-4.png'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const Information = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className='Information'>
      <div className='container abtcontainer'>
        <div className='card_info row'>
          <div className='col-md-4 card_inner'>
            <h6>01</h6>
            <img src={d1} alt="" />
            <h4>ASK ASSOCIATES</h4>
            <p>A design studio established in 2017, ASK & Associates specializes in
              creating innovative architectural solutions that transform spaces into
              timeless works of art</p>
            <a href="#"><svg className='svgdaynight' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></a>
          </div>
          <div className='col-md-4 card_inner'>
            <h6>02</h6>
            <img src={d1} alt="" />
            <h4>3D DESIGN</h4>
            <p>At 3D Designing Architect and Project Management Consultancy (PMC),
              we envision, innovate, and materialize architectural excellence that
              transforms spaces into timeless works of art. </p>
            <a href="#"><svg className='svgdaynight' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></a>
          </div>
          <div className='col-md-4 card_inner'>
            <h6>03</h6>
            <img src={d1} alt="" />
            <h4>our expertise</h4>
            <p>With a harmonious blend of
              creativity, technology, and expertise, we craft architectural solutions that
              not only meet but exceed the aspirations of our clients.</p>
            <a href="#"><svg className='svgdaynight' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
            </svg></a>
          </div>
        </div>
      </div>
      <div className='about_info'>
        <div className='largefont'>
          {/* <h2 data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">ABOUT</h2> */}
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-lg-5'>
                <div className='about_image'>
                  <img src={about1} alt="" />
                  <img data-aos="fade-up"
                    data-aos-duration="3000" src={about2} alt="" />

                </div>
              </div>
              <div className='col-md-6 col-lg-7'>
                <div className='about_inner_text'>
                  <div className='about_text'>
                    <h3>ABOUT ASK  & ASSOcIATES</h3>
                    <p className='about_p'>
                      At 3D Designing Architect and Project Management Consultancy (PMC),
                      we envision, innovate, and materialize architectural excellence that
                      transforms spaces into timeless works of art. With a harmonious blend of
                      creativity, technology, and expertise, we craft architectural solutions that
                      not only meet but exceed the aspirations of our clients. Our journey is
                      defined by a passion for design, a commitment to quality, and a
                      dedication to turning visions into reality
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
      <div className='project_counter'>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='counter_all'>
                <div className="counter-box">
                  <div className='funimg'><img src={fun1} alt="" /></div>
                  <div className='counter_main'>
                    <p>Design Drawing</p>
                    <div className='d-flex align-items-center'><CountUp className='countint' start={0} end={400} duration={6} separator="," /><span>+</span></div>
                  </div>
                </div>
                <div className="counter-box">
                  <div className='funimg'><img src={fun2} alt="" /></div>
                  <div className='counter_main'>
                    <p>Project Completed</p>
                    <div className='d-flex align-items-center'><CountUp className='countint' start={0} end={210} duration={6} separator="," /><span>+</span></div>
                  </div>
                </div>
                <div className="counter-box">
                  <div className='funimg'><img src={fun3} alt="" /></div>
                  <div className='counter_main'>
                    <p>Design Award</p>
                    <div className='d-flex align-items-center'><CountUp className='countint' start={0} end={15} duration={6} separator="," /></div>
                  </div>
                </div>
                <div className="counter-box">
                  <div className='funimg'><img src={fun4} alt="" /></div>
                  <div className='counter_main'>
                    <p>Project Running</p>
                    <div className='d-flex align-items-center'><CountUp className='countint' start={0} end={62} duration={6} separator="," /></div>
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

export default Information