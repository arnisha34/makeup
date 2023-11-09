import { useContext } from "react"
import { Hero } from "./components/hero"

import { DataContext } from "./DataContext"
import { Link } from "react-router-dom"
import { Loading } from "./components/loading"


export const Eyes = () => {

  const ctx = useContext(DataContext)

  const eyeMakeup = ctx.makeupData.filter(items => items.product_type == "eyeliner" || items.product_type == "eyeshadow" || items.product_type == "eyebrow" || items.product_type == "mascara")

  return (
    <section id="eye-makeup-wrapper">
      <Hero url={'/makeup-hero.jpg'} alt="eye makeup" title={"Eyes please!!"}/>
      <Loading url='public/loading.gif' alt="loading animation" />
      <div className='products'>
        {eyeMakeup.slice(0,48).map(item => {
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