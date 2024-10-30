import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>
            ABOUT <span className='text-gray-700 font-medium'>US</span>
          </p>
        </div>

        <div className='my-10 flex flex-col md:flex-row gap-12'>
          <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4text-sm text-gray-600 '>
            <p>Welcome to Prescripto Medical Clinic. A Medical Clinic that you can rely on At Prescripto Medical the essence of our service is simply ‘you’. 
              We pride ourselves on the fact that our very foundation is built on patient satisfaction and not wasting time. We need you to feel that you have received the best care, 
              advice and service and leave your appointment feeling well cared for.</p>
            <p>Prescripto Medical is a patient centric environment, which means you are at the center of everything we do and every decision we make.
            We are your lifestyle partner, helping you live well by bringing the best in medical care and lifestyle care to you.</p>
            <b className='text-gray-800'>Our Vision</b>
            <p>Our vision to be best-in-class, in offering affordable, seamless healthcare solutions, touching 10 million Sri Lankan lives by 2030.</p>
          </div>
        </div>

           

    </div>
  )
}

export default About