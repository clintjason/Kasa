import './_avatar.scss';

const Avatar = (props) => {
  return (
    <div className='flex-row gap-10 center-all'>
      <h3 className='avatar__username'>{props.host.name}</h3>
      <img src={props.host.picture} alt={"picture of " + props.host.name} className='avatar__pic' />
    </div>
  )
}
export default Avatar;