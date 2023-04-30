import React from 'react'
import './HeroSection.css'
import calories from '../../assets/images/calories.png'
import Header from '../Header/Header'
import heroImage from '../../assets/images/hero_image.png'
import heart from '../../assets/images/heart.png'
import heroBackgroundImage from '../../assets/images/hero_image_back.png'
import NumberCounter from 'number-counter'
const HeroSection = () => {
    const ourCoachesData = [
        {
            projectNumbers:134,
            name:'EXPERT COACHES'
        },
        {
            projectNumbers:978,
            name:'MEMBER JOINED'
        },
        {
            projectNumbers:27,
            name:'FITNESS PROGRAMS'
        },
    ]
  return (
    <div>
        <div className='BlurBackgroundContainer absolute'></div>
        <div id='heroSection' className='flex heroSection'>
            <div className='flex-3'>
            <Header />
            <div className='heroSectionContainer mx-4 text-white'>
            <div className='rounded-pill heroSectionDescriptionContainer p-2'><span className='heroSectiondescription'>THE BEST FITNESS CLUB IN THE TOWN</span><div className='rounded-pill descriptionAnimationContainer'></div></div>
            <div className="shapeyourbodyContainer mb-4">
                <span className='shapeTextContainer outlined-text'>SHAPE</span> <span>YOUR IDEAL BODY </span>
            </div>
            <div className='weWillHelpContainer mb-4'><span>In here we will help you to shape and build your ideal body and live up your life to fullest</span></div>
            <div className='mb-4 flex items-center ourProgramsContainer'>
            {
                ourCoachesData.map(data =>(
                <div key={data?.name} className='flex flex-col'>
                    <div className='flex items-center ourcoaches'><span className='plusIconContainer'>+</span><span className='ml-1 membersNumber fs-2'><NumberCounter start={0} delay={2} end={data?.projectNumbers } /></span></div>
                    <span className='text-gray font-bold'>{data?.name ?? 'Loadin...'}</span>
                </div>
                ))}
                </div>
            <div className='flex getStartedButtonContainer gap-1 mb-4 pb-1'>
                <button className='font-bold getStartedBtn bg-orange text-white pointer border-0'>Get started</button>
                <button className='font-bold learnMoreBtn bg-transparent text-white pointer border-orange'>Learn More</button>
            </div>
            </div>
            </div>
            <div className='flex-1 bg-orange joinNowContainer relative'>
                <div className='flex justify-end p-3'>
                    <div className='bg-white p-2 pointer joinNowBtn font-bold'><span>Join Now</span></div>
                </div>
                <div className='flex absolute heartRateContainer p-2 rounded-sm flex-col gap-1'>
                    <div className='heartImageContainer'>
                        <img src={heart} alt='' />
                    </div>
                    <span className='text-gray heartRateText font-bold'>Heart Rate</span>
                    <span className='text-white heartRateAmount'>116 bpm</span>
                </div>
                <div className='absolute heroSectionImage'>
                    <img src={heroImage} alt="" />
                </div>
                <div className='absolute heroSectionBackgroundImage'>
                    <img src={heroBackgroundImage} alt="" />
                </div>
                <div className='bg-slate caloriesContainer absolute rounded-sm flex justify-around items-center p-2'>
                    <div className='caloriesImageContainer'>
                        <img src={calories} alt="img" />
                    </div>
                    <div className='flex flex-col ml-2 text-center'>
                        <span className='text-gray mb-2 font-bold'>Calories burned</span>
                        <span className='text-white caloriesAmount'>220 kcal</span>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default HeroSection
