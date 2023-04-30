import React from 'react'
import './EmailSection.css'
import emailjs from '@emailjs/browser'
import { useRef,useState } from 'react'
const EmailSection = () => {
    const[email,setEmail] = useState('')
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_5f95a64', 'template_j5hourn', form.current, 'YWGFb8UZtowpUazhv')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          setEmail('')
      }
  return (
    <>
        <div className='mx-4 emailSection pb-4 flex items-end justify-between'>
            <div className='readyToLevelText relative flex flex-col text-white'>
                <div>
                    <span className='outlined-text readyText'>READY</span><span className='outlined-text'> TO </span> <span className='font-bold'>LEVEL UP</span>
                </div>
                <div>
                    <span className='font-bold'>YOUR BODY </span><span className='outlined-text'>WITH US?</span>
                </div>
            </div>
                <form ref={form} onClick={sendEmail} className='bg-gray emailContainer flex items-center'>
                    <div className='enterYourEmailContainer'>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name='username' value={email} placeholder='Enter your Email Address here' />
                    </div>
                    <button className='emailJoinNowBtn ml-2 pointer bg-orange text-white'>Join Now</button>
                </form>
        </div>
    </>
  )
}

export default EmailSection
