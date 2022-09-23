import { ContentInfo } from './contentInfo/ContentInfo'
import { Footer } from './footer/Footer'
import './Layout.sass'
import { Profile } from './profile/Profile'

export const Layout = () => {
  return (
    <div className='card__container'>
      <Profile />
      <ContentInfo />
      <Footer />
    </div>
  )
}
