import { useState } from 'react'
import { RiHeart3Line, RiAccountPinCircleLine, RiSearchLine, RiShoppingBagLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from 'react-router-dom'


export const Mobile = () => {

  const [toggle, setIsToggled] = useState<boolean>(false)

  const handleClick = () => {
    setIsToggled(!toggle)
  }

  return (
    <nav id='mobileNav' className='hide'>
      <Link to="/" id="logo"><img src="/mr-logo.svg" alt="Makeup Rocks logo"/></Link>
      <div className='mobile-menu-icon' onClick={handleClick}><RxHamburgerMenu size={30} /></div>
        <div className={`mobile-menu-container ${toggle === true ? "" : "hide"}`}>
          <div className='nav-links' onClick={handleClick}>
            <Link to="/new">New</Link>
            <Link to="/eyes">Eyes</Link>
            <Link to="/nails">Nails</Link>
            <Link to="/face">Face</Link>
            <Link to="sale">Sale</Link>
            <RiAccountPinCircleLine size={20} />
            <RiSearchLine size={20} />
            <RiHeart3Line size={20} />
            <RiShoppingBagLine size={20} />
          </div>
        </div>
    </nav>
  )
}