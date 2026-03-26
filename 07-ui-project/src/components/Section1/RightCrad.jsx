import RightCardContent from './RightCardContent'

const RightCrad = (props) => {
  return (
    <div className='h-full shrink-0 w-70 overflow-hidden relative rounded-4xl'>
      <img className='h-full w-full object-cover' src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} color={props.color} />
    </div>
  )
}

export default RightCrad
