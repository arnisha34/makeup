import { BsFillLightningFill } from 'react-icons/bs'
import { RiHeart3Fill } from 'react-icons/ri'


export const Header = () => {
  return(
    <header id='hero' className="overlay">
      <img src='/mr-header.jpg' alt='Makeup Rocks' width="100%" className='boxShadow'/>
      <div className="hero-text"><b>Makeup<BsFillLightningFill fill={"#509ecf"} size={60}/>Rxcks</b> <RiHeart3Fill fill={"pink"} size={50}/> so do you!!</div>
    </header>
  )
}
