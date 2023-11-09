


import { useContext } from "react"
import { Hero } from "./components/hero"

import { DataContext } from "./DataContext"
import { Link } from "react-router-dom"
import { Loading } from "./components/loading"


export const Nails = () => {

  const ctx = useContext(DataContext)

  const nails = ctx.makeupData.filter(items => items.product_type == "nail_polish")

  return (
    <section id="eye-makeup-wrapper">
      <Hero url={'/nails-hero.jpg'} alt="nail polish" title={"Those nails though!!"}/>
      <div className='products'>
        <Loading url='/loading.gif' alt="loading animation" />
        {nails.slice(0,48).map(item => {
          return(
            <Link to={`${item.brand}/${item.name}`} key={item.id}>
            <div className={`product ${item.id}`}>
              <div className='product-info'>
                <img src={item.api_featured_image}  alt={item.name} className='product-image boxShadow'/>
                <h3 className='product-name'>{item.name}</h3>
                <h3 className='product-brand'>{item.brand}</h3>
                <h4 className='product-price'>${item.price == null || item.price == 0? 20.0: item.price}</h4>
              </div>
              <button type='button' className='product-btn'>More info</button>
            </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}