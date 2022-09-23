import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare
} from 'react-icons/fa'

import './Footer.sass'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='social__links'>
        <a href='#'>
          <FaTwitterSquare size={32} />
        </a>
        <a href='#'>
          <FaFacebookSquare size={32} />
        </a>
        <a href='#'>
          <FaInstagramSquare size={32} />
        </a>
        <a href='#'>
          <FaGithubSquare size={32} />
        </a>
      </div>
    </footer>
  )
}
