import './ProfileStyle.sass'
import data from '../../data/data.json'

export const Profile = () => {
  return (
    <div className='card__pic'>
      <img src={data[1].profileURL} alt='' />
    </div>
  )
}
