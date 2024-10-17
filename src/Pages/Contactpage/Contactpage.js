import React from 'react'
import './Contactpage.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CursorFollower from '../../Components/CursorFollower/CursorFollower';
import Navigation from '../../Components/Navigation/Navigation';
import CountUp from 'react-countup';
import fun1 from '../../assets/images/fact-1.png'
import fun2 from '../../assets/images/fact-2.png'
import fun3 from '../../assets/images/fact-3.png'
import fun4 from '../../assets/images/fact-4.png'
import Letestblogs from '../../Components/Letestblogs/Letestblogs';
const Contactpage = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className='Contactpage'>
            <CursorFollower /> 
            <Navigation />
            <div className='contact-inner-main'>
                <div className='container d-flex align-items-center'>
                     <div className='contact-p-heading'>
                     <h2 className='pp-heading' data-aos="fade-down-right">contact us</h2>
                     
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
                     <Letestblogs/>
                     <div className='container'>
        <div className='row '>
            <div className='col-md-5 footer_inner inner_one'>
                <h5>LET’S DISCUSS NEXT PROJECTS</h5>
                <p>The talent at Mrittik runs wide and deep. Across many markets, geographies and typologies, our team members are some of the finest professionals in the industry.. We’ve grouped our work into five categories: places, venues, spaces, experiences and events.</p>
            </div>
            <div className='col-md-6 footer_inner'>
                <div className='home_contact'>
                    <form action="contact.php" method="POST">
                    <input class="form-control form-control-lg" name="name" id="name" placeholder="Your Name*" required aria-label=".form-control-lg example"/>
                    <input class="form-control form-control-lg" name="phone" id="phone" placeholder="Your phone no*" required aria-label=".form-control-lg example"/>
                    <input class="form-control form-control-lg" name="email" id="email" placeholder="Your email*" required aria-label=".form-control-lg example"/>
                    <textarea class="form-control pt-4" name="message" id="message" placeholder="Your Message" rows="3" ></textarea>
                    <div className='button_group'>
                        <button type='submit' class="btnfoot olive">
                        Send Mail
                        </button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
                    </div>
                    
                    
            </div>
        </div>
    )
}

export default Contactpage