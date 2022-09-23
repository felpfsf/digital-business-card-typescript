import { FaLinkedin } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'
import LinkButton from '../ui/LinkButton/LinkButton'
import './ContentInfoStyle.sass'
import data from '../../data/data.json'

export const ContentInfo = () => {
  return (
    <div className='content__wrapper'>
      {/* header */}
      <div className='content__header'>
        <h1>{data[1].name}</h1>
        <h3>{data[1].occupation}</h3>
        <p>{data[1].personalLink}</p>
      </div>
      {/* button links */}
      <div className='content__links'>
        <LinkButton
          classname={`button email`}
          icon={<HiMail size={16} />}
          title='Email'
        />
        <LinkButton
          classname={`button linkedin`}
          icon={<FaLinkedin size={13} />}
          title='LinkedIn'
        />
      </div>
      {/* bio */}
      <div className='content__bio'>
        <h2>About</h2>
        <p>{data[1].bio}</p>
        <h2>Interests</h2>
        <p>{data[1].interests}</p>
      </div>
    </div>
  )
}
