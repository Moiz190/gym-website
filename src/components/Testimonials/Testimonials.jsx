import React,{ useState } from 'react'
import './Testimonials.css'
import rightArrow from '../../assets/images/rightArrow.png'
import leftArrow from '../../assets/images/leftArrow.png'
import mathew from '../../assets/images/t-image1.png'
import john from '../../assets/images/t-image2.jpg'
import franklin from '../../assets/images/t-image3.jpg'
const Testimonials = () => {
    const review = [
        {
            name:'MATHEW HENDRICKSON',
            image:mathew,
            designation:'ENTREPRENEUR',
            description:'I made the right choice by choosing the Fitclub and by choosing the right plan and program i already achieved my ideal body!'
        },
        {
            name:'JOHN KEVIN',
            image:john,
            designation:'COACH',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae corporis deleniti quae consequuntur vitae, odio dolore nam sint'
        },
        {
            name:'FRANKLIN',
            image:franklin,
            designation:'CUSTOMER',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam beatae corporis deleniti quae consequuntur vitae'
        },
    ]
    const [selected,setSelected] = useState(0)
    const [addAnime,setAddAnime] = useState(false)
    const goBackward = () =>{
        if(selected === 0){
            setSelected(review.length -1)
            setAddAnime(true)
            setTimeout(()=>setAddAnime(false),300)
        }
        else{
            setSelected(selected - 1)
            setAddAnime(true)
            setTimeout(()=>setAddAnime(false),300)
        }
    }
    const goForward = () =>{
        if(selected === review.length -1){
            setSelected(0)
            setAddAnime(true)
            setTimeout(()=>setAddAnime(false),300)
        }
        else{
            setSelected(selected + 1)
            setAddAnime(true)
            setTimeout(()=>setAddAnime(false),300)
        }
    }
  return (
    <>
     <div id='testimonial' className="testimonialContainer items-center flex gap-1 px-4 mr-2">
        <div className='testimonialreviewSection w-75'>
            <div className='testimonialHeading mb-3 text-orange'>
                <span className='font-bold'>TESTIMONIALS</span>
            </div>
            <div className='whatTheySayText mb-3 flex flex-col'><span className='outlined-text mb-3'>WHAT THEY</span><span className='font-bold text-white'>SAY ABOUT US</span></div>
                <div className='flex'>
                    <div className='flex flex-col text-white'>
                        <span className={`review mb-3 ${addAnime && 'testimonialTextAnimation'}`}>{review[selected]?.description}</span>
                        <div className='flex items-center reviewerName font-bold'>
                            <span className='text-orange'>{review[selected]?.name}</span><span className='mx-1'> - </span><span>{review[selected]?.designation}</span>
                        </div>
                    </div>
                </div>
                
        </div>
        <div className='testimonialImageSection flex gap-3'>
            <div className='arrowContainer flex gap-1 items-end'>
                <div onClick={goBackward} className='pointer testimonialLeftArrowContainer'>
                    <img src={leftArrow} alt="" />
                </div>
                <div onClick={goForward} className='pointer testimonialRightArrowContainer'>
                    <img src={rightArrow} alt="" />
                </div>
            </div>
        <div className='relative'>
            <div className='border-orange testimonialBackgroundBorderImage'></div>
            <div className='testimonialBackgroundorangeImage absolute'></div>
            <div className={`testimonialImageContainer absolute ${addAnime && 'animation-linear-Backward'}`}><img src={review[selected]?.image} alt="" /></div>
        </div>
        </div>
     </div> 
    </>
  )
}

export default Testimonials
