import { TiSocialFacebook, TiSocialTwitter, TiSocialLinkedin, TiSocialInstagram, TiSocialYoutube } from 'react-icons/ti'

export const Footer = () => {
  return(
    <footer>
       <div className="footer-inner">
        <div>&copy; Makeup Rxcks 2023</div>
        <div className='social-icons'>
          <TiSocialFacebook size={24}/>
          <TiSocialTwitter size={24}/>
          <TiSocialLinkedin size={28}/>
          <TiSocialInstagram size={24}/>
          <TiSocialYoutube size={26}/>
        </div>
      </div>
    </footer>
  )
}

