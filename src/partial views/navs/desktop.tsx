import { RiHeart3Line, RiAccountPinCircleLine, RiSearchLine, RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'


export const Desktop = () => {
  return (
    <nav id='desktopNav'>
      <Link to="/" id="logo"><img src="/mr-logo.svg" alt="Makeup Rocks logo"/></Link>
      <div className="nav-links">
        <Link to="/new">New</Link>
        <Link to="/eyes">Eyes</Link>
        <Link to="/nails">Nails</Link>
        <Link to="/face">Face</Link>
        <Link to="sale">Sale</Link>
      </div>
      <div className="account-info">
        <RiAccountPinCircleLine size={20} />
        <RiSearchLine size={20} />
        <RiHeart3Line size={20} />
        <RiShoppingBagLine size={20} />
      </div>
    </nav>
  )
}