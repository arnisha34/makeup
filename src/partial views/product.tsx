import { useContext, useState } from "react";
import { /*useNavigate,*/ useParams } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { DataContext } from "../DataContext";

export const Product = () => {

  const ctx = useContext(DataContext)

  const {brand, name} = useParams();

  //checks if item brand and name matches the DataContext array and then populates only those items
  const product = ctx.makeupData.find(item => item.brand === brand && item.name === name)

  // const navigate = useNavigate()

  const [quantity, setQuantity] = useState<number>(1)

// add one to the quantity state
  const addQuantity = () => {
    if(quantity === 5){
      setQuantity(5)
    }else{
      setQuantity(quantity + 1)
    }
  }

  // subtract one from the quantity state
  const minusQuantity = () => {
    if(quantity === 1){
      setQuantity(1)
    }else{
      setQuantity(quantity - 1)
    }
  }

  //will handle input when user attempts to add more than 5 to the quantity
  const handleChange = (e: any) => {
    e.preventDefault();
    if(quantity <= 5 && quantity >= 1){
      setQuantity(e.target.value)
    }
  }


  return (
    <section className="single-product-container">
      {/* <div className="back-btn">
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div> */}
      <div className="single-product-image">
        <img src={product?.api_featured_image} alt={product?.name} className="boxShadow"/>
      </div>
      <div className="single-product-info">
        <div className="brand"><h4>{product?.brand}</h4></div>
        <div className="name"><h1>{product?.name}</h1></div>
        <div className="price"><h3>${product?.price == 0.0 || product?.price == 0? 20.0: product?.price}</h3></div>
        <div className="description"><h5>Product Details</h5> {product?.description.slice(0, 75) + "..."}</div>
        <div className="color-options">
          <h5>Colors:</h5> <select className="colors">{product?.product_colors?.map(item => <option key={item.colour_name} value={item.colour_name}>{item.colour_name}</option>)}</select>
        </div>
        <div className="quantity">
          <span className="addQty" onClick={minusQuantity}><FiMinus /></span> <input type="number" className="qty" value={quantity} onChange={handleChange} /> <span className="subQty" onClick={addQuantity}><FiPlus /></span>
        </div>
        <div className="add-to-cart">
          <button type="button">Add to cart</button>
        </div>
        <div className="tags">
          <span><b>Tags:</b> </span>{product?.tag_list.map(tag => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </section>
  )
}