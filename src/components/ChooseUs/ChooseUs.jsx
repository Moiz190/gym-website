import React from 'react'
import './ChooseUs.css'
import imageOne from '../../assets/images/image1.png'
import imageTwo from '../../assets/images/image2.png'
import imageThree from '../../assets/images/image3.png'
import imageFour from '../../assets/images/image4.png'
import tick from '../../assets/images/tick.png'
import nb from '../../assets/images/nb.png'
import adidas from '../../assets/images/adidas.png'
import nike from '../../assets/images/nike.png'
const ChooseUs = () => {
  const chooseUsDescription = [
    {
      description:'OVER 140+ EXPERT COACHS',
    },
    {
      description:'TRAIN SMARTER AND FASTER THAN BEFORE',
    },
    {
      description:'1 FREE PROGRAM FOR NEW MEMBER',
    },
    {
      description:'RELIABLE PARTNERS',
    },
  ]
  return (
    <>
      <div id='whyUs' className='chooseUsContainer mx-4 gap-2'>
        <div className='chooseUsImageContainer gap-1'>
            <div className='items item-1'><img src={imageOne} alt="" /></div>
            <div className='items item-2'><img src={imageTwo} alt="" /></div>
            <div className='items item-3'><img src={imageThree} alt="" /></div>
            <div className='items item-4'><img src={imageFour} alt="" /></div>
        </div>
        <div className='flex flex-col whyChooseUsDescriptionBulletsContainer'>
            <span className='text-orange mb-2 font-bold'>SOME REASONS</span>
            <div className='text-white mb-2 whyChooseUsText'><span className='whyText outlined-text'>WHY</span> <span className='font-bold'>CHOOSE US?</span></div>

            <div className='text-white'>
              {
                chooseUsDescription.map(data=> (
                  <div key={data?.description} className='flex whyChooseUsDescriptionContainer'>
                    <span className='tickImage'><img src={tick} alt="" /></span>
                    <span className='whyChooseUsDescriptionText ml-2 pt-1 font-bold'>{data?.description}</span>
                    </div>

                ))}
              </div>
            <div className='flex flex-col text-gray font-bold'>
                <span className='mb-2'>OUR PARTNERS</span>
                <div className='flex gap-1'>
                    <div className='ourPartnersImage'><img src={nb} alt="" /></div>
                    <div className='ourPartnersImage'><img src={adidas} alt="" /></div>
                    <div className='ourPartnersImage'><img src={nike} alt="" /></div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default ChooseUs
