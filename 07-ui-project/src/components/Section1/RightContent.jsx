import React from 'react'
import RightCrad from './RightCrad'


const RightContent = (props) => {
    return (
        <div id='right' className='w-2/3 p-6 rounded-4xl h-full overflow-x-auto flex flex-nowrap gap-6'>
            {props.users.map(function(elem,idx){
                return <RightCrad key={idx} id={idx} img={elem.img} tag={elem.tag} color={elem.color} />
            })}
        </div>
    )
}

export default RightContent
