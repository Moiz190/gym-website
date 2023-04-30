import React from 'react'
import './ExploreProgram.css'
import rightArrow from '../../assets/images/rightArrow.png'
import dumbell from '../../assets/images/dumbell.svg'
import runningImage from '../../assets/images/runing.svg'
import fire from '../../assets/images/flame.svg'
import heartHealth from '../../assets/images/heartHealth.svg'
const ExploreProgram = () => {
    const trainingProgramData =[
        {
            image: dumbell,
            name:'Strength Training',
            description:'in this program,you are trained to improve your strength through many exercises.'
        },
        {
            image: runningImage,
            name:'Cardio Training',
            description:'in this program,you are trained to do sequential moves in range of 20 until 30 minutes.'
        },
        {
            image: fire,
            name:'Fat Burning',
            description:'This program is suitable for you who wants to get rid of your fat and lose their weight.'
        },
        {
            image: heartHealth,
            name:'Health Fitness',
            description:'This programs is designed for those who exercises only for their body fitness not body building.'
        },
    ]
    
  return (
    <div>
        <div id='programs' className='flex items-center justify-between text-white exploreProgramHeadingContainer'>
            <span className='exploreOurText outlined-text'>EXPLORE OUR</span><span className='font-bold mx-2 programText'>PROGRAMS</span><span className='outlined-text toShapeYouText'>TO SHAPE YOU</span>
        </div>
        <div className='flex mx-2 programsContainer align-item-stretch gap-1 justify-center text-white'>
            {   
                trainingProgramData.map(data =>(
                    <div key={data.name} className="trainingsContainer bg-gray p-3 flex flex-grow-1 flex-col">
                        <div className='trainingImageContainer mb-2'><img src={data.image} alt="" /></div>
                        <span className='trainingName font-bold mb-1'>{data.name}</span>
                        <p className='mb-1 trainingDescription'>{data.description}</p>
                        <div className='flex mb-1  mt-auto items-center font-bold'><span>Join Now</span><span className='rightArrowImage'><img src={rightArrow} alt="" /></span></div>
                    </div> 
                ))
            }
        </div>
    </div>
  )
}

export default ExploreProgram
