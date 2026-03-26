import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (
        <div className='absolute top-0 left-0 h-full w-ful p-8 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-bold rounded-full h-10 w-10 flex justify-center items-center'>{props.id + 1}</h2>
            <div>
                <p className='text-shadow-2xs text-lg leading-relaxed text-white mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nemo ullam dolorem assumenda recusandae neque obcaecati autem?</p>
                <div className='flex justify-between'>
                    <button  className= {` ${props.color} text-white font-medium py-2 px-7 rounded-full `}>{props.tag}</button>
                    <button className={`${props.color} text-white font-medium py-2 px-4 rounded-full `}><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContent
