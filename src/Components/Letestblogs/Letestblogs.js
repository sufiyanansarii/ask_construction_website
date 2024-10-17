import React from 'react'
import './Letestblogs.css'
import bg from '../../assets/images/bg-1 (1).jpg'
import serbg2 from '../../assets/images/serbg2.jpg'
import serbg3 from '../../assets/images/serbg3.jpg'
import serbg4 from '../../assets/images/serbg4.jpg'
import serbg5 from '../../assets/images/serbg5.jpg'
import serbg6 from '../../assets/images/serbg6.jpg'
import p1 from '../../assets/images/p1.svg'
import p2 from '../../assets/images/p2.svg'
import p3 from '../../assets/images/p3.svg'
import p4 from '../../assets/images/p4.svg'
import p5 from '../../assets/images/p5.svg'
import ser1 from '../../assets/images/ser1.png'
import ser2 from '../../assets/images/ser2.png'
import ser3 from '../../assets/images/ser3.png'
import ser4 from '../../assets/images/ser4.png'
import ser5 from '../../assets/images/ser5.png'
import ser6 from '../../assets/images/ser6.png'
import logolight from '../../assets/svg/logo-light.svg'
import Cardcomponent from '../Cardcomponent/Cardcomponent'
const Letestblogs = () => {
  return (
    <div className='letestblogs'>
      
       <div className='pages-page-cards'>
          <div className='container'>
            <div className='pp-cards row'>
            <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="500">
                            <div className='icon_box_2'>
                              <img className='post-bg' src={bg} alt="" /> 
                              <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser1} alt="" /></div>
                              <h4>Urban design</h4>
                              <p>Ask & Associates delivers exceptional architectural designs blending creativity with precision. Our team of experts ensures that every project is tailored to meet the client’s vision while maintaining the highest standards of design and quality, creating spaces that inspire and endure.</p>
                              </div>
                            </div>
                          
              </div>
              <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="600">
                            <div className='icon_box_2'>
                              <img className='post-bg' src={serbg2} alt="" />
                              <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser2} alt="" /></div>
                              <h4>Interior Design</h4>
                              <p>Interior design at Ask & Associates is more than just decoration—it's about creating functional, beautiful spaces that enhance the way you live and work. Our interior designers pay attention to every detail, ensuring that every element contributes to a cohesive and inspiring environment.</p>
                              </div>
                            </div>
              </div>
              <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="700">
                            <div className='icon_box_2'>
                              <img className='post-bg' src={serbg3} alt="" />
                              <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser3} alt="" /></div>
                              <h4>Landscape Design</h4>
                              <p>Our client-centered approach ensures every project is unique. We work closely with our clients to understand their vision, needs, and preferences, delivering solutions that not only meet but exceed their expectations. Every detail is tailored to their desires.</p>
                              </div>
                            </div>
              </div>
              <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="800">
                            <div className='icon_box_2'>
                              <img className='post-bg' src={serbg4} alt="" />
                              <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser4} alt="" /></div>
                              <h4>Industrial Design</h4>
                              <p>From commercial developments to custom residential projects, Ask & Associates has the expertise to handle projects of all scales. We ensure that each project is executed with precision, delivering results that are not only functional but also aesthetically pleasing.</p>
                              </div>
                            </div>
              </div>
              <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="900">
                            <div className='icon_box_2'>
                              <img className='post-bg' src={serbg5} alt="" />
                              <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser5} alt="" /></div>
                              <h4>3D Modeling</h4>
                              <p>Ask & Associates excels in 3D architectural design, bringing concepts to life with precision and detail. Our 3D models allow clients to visualize projects in a realistic and immersive way, ensuring that every design element aligns with their vision.</p>
                              </div>
                            </div>
              </div>
              <div class="col-lg-4 pp-card-inner aos-init aos-animate" data-aos="fade-up" data-aos-duration="1000">
                            <div className='icon_box_2'>
                  <img className='post-bg' src={serbg6} alt="" />
                  <div className='icon_box_inner'>
                              <div className='i_b_i_img'> <img src={ser6} alt="" /></div>
                              <h4>Blueprint Design</h4>
                              <p>Ask & Associates excels in creating precise blueprints, ensuring every detail of the design is accurately represented. Our blueprints serve as the foundation for all construction projects, offering clear guidelines for builders and contractors to follow with confidence.</p>
                              </div>
                            </div>
              </div>


                        

            </div>
          </div>
       </div>
    </div>
  )
}

export default Letestblogs