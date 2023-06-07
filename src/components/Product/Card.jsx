import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getProducts } from "../../Redux/Features/Dashboard/productsSlice";
import "./Product.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddToCartProduct from "../../Redux/Features/Cart/CartSlice";


 

const Card = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

 //add to cart
 const handleAddToCart =() =>{                  
    // item = {...product, quantity: 1};
    dispatch(AddToCartProduct({productId, productQuantity: 1}));
 }

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
    
      <div className="card-container">
        
        {products.length > 0 ? (
        products.map((product) => (
            <div className="card-one">
            <img src={product.images[0]} />
            <div className="card-title">
            <div className="product-title">
              <p>{product.name}</p>
              <h5>${product.price}</h5>
            </div>
            

            <div className="icon">
              <FavoriteBorderIcon />
            </div>
            
          </div>
          <button  onClick={handleAddToCart} type="submit" className="addcart-btn">
            Add to cart
              </button>
            </div>
        ))
      ) : (
        <div>Loading products...</div>
      )}
         
   
        

      </div>
    </>
  );
};
export default Card;
