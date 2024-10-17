import React from 'react'
import './Runningproject.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import thumbimg from '../../assets/images/3.jpg'
import thumbimg2 from '../../assets/images/2.jpg'
import thumbimg3 from '../../assets/images/1.jpg'



const Runningproject = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <div className='running_project'>


      <div className='largefont_running'>
        <h2 data-aos="fade-right" data-aos-duration="1000">RUNNING</h2>
      </div>
      <div className='container'>
        <div className='row justify-content-between'>
          <div className='col-lg-5 col-md-5 col-sm-5'>
            <div className='left_part'>
              <div className='left_part_item' data-aos="fade-right" data-aos-duration="1000">
                <div className='thumb'>
                  <img className='image_item' src={thumbimg} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-5 col-md-5 col-sm-5'>
            <div className='right_part'>
              <div className='right_part_item' data-aos="fade-left" data-aos-duration="1000">
                <div className='thumb'>
                  <img className='image_item' src={thumbimg2} alt="" srcset="" />
                </div>
              </div>
              <div className='right_part_item' data-aos="fade-left" data-aos-duration="1500">
                <div className='thumb'>
                  <img className='image_item' src={thumbimg3} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Runningproject