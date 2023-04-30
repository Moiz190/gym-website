import React from 'react'
import './SubscriptionPlan.css'
import rightArrow from '../../assets/images/rightArrow.png'
import dumbell from '../../assets/images/dumbell.svg'
import heartHealth from '../../assets/images/heartHealth.svg'
import whiteTick from '../../assets/images/whiteTick.png'
import crown from '../../assets/images/crown.svg'
const SubscriptionPlan = () => {
    const Plans =[
        {
           image: heartHealth,
           category: 'BASIC PLAN',
           fee: 25,
           description :[ 
           '2 hours of exercises',
           'Free consultation to coaches',
           'Access to the Community'
        ]},
        {
           image: crown,
           category: 'PREMIUM PLAN',
           fee: 30,
           description :[
                '5 hours of exercises',
                'Free consultation to coaches',
                'Access to minibar'
        ]},
        {
           image: dumbell,
           category: 'PRO PLAN',
           fee: 45,
           description:
           [
            '8 hours of exercises',
            'Consultation of Private Coach',
            'Free Fitness Merchandises',
        ]},
        ]
  return (
    <div className='relative'>
      <div className='BlurBackgroundContainer absolute'></div>
      <div className='BlurBackgroundContainer right-0 absolute'></div>
      <div id='plans' className='startYourJourneyContainer flex justify-between text-white'><span className='outlined-text'>READY TO START</span><span className='mx-2 font-bold'>YOUR JOURNEY</span><span className='outlined-text'>NOW WITH US</span></div>
      <div className='SubscriptionCardsContainer flex gap-3 justify-center items-center'>
        {Plans.map(data =>(
                <div key={data?.category} className='SubscriptionCard text-white p-3 bg-darkgrey flex flex-col'>
                    <span className='mb-4 planImageContainer'><img src={data?.image} alt='' /></span>
                    <span className='mb-4 font-bold'>{data?.category}</span>
                    <span className='mb-4 SubscriptionFee font-bold'>$ {data?.fee}</span>
                    <div className='mb-2'>
                        {data.description.map(child =>(
                            <div key={child} className='flex items-center mb-3'>
                            <span className='whiteTickImageContainer'><img src={whiteTick} alt=''/></span>
                            <span className='ml-2 subscriptionDescription'>{child}</span>
                            </div>
                        ))}
                    </div>
                    <div className='flex seeMoreBenefitContainer items-center mb-4'>
                        <span>See more benefits</span>
                        <span className='ml-1 seeMoreBenefitIcon'><img src={rightArrow} alt=''/></span> 
                    </div>
                        <div className='joinNowBtnContainer'>
                            <button className='joinNowBtn pointer font-bold'>Join now</button>
                        </div>
                </div>
        ))}
      </div>
    </div>
  )
}

export default SubscriptionPlan
