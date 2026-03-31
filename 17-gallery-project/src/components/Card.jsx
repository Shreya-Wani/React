import React from 'react'

const Card = (props) => {
    return (
        <div>
            <a href={props.elem.url} target='_blank'>
                <div className='h-50 w-53 m-2 overflow-hidden bg-white'>
                    <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
                </div>
                <h2 className='text-lg ml-4'>{props.elem.author}</h2>
            </a>
        </div>
    )
}

export default Card
