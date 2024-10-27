import { useParams } from "react-router"
import Banner from "../../Components/Banner/Banner"
import Header from "../../Components/Header/Header"
import { useContext, useEffect } from "react"
import { FlashContext } from "../../Context/FlashContext"
import { useState } from "react"
import "./ProductDetails.css";

const ProductDetails = () => {
  const {id} = useParams();
  const FlashContextData = useContext(FlashContext);
  const{Flashproducts, setFlashProducts} = FlashContextData;

  const [detailData, setDetailData] = useState([]); 

  const getDetailData = ()=>{
    const DetailData = Flashproducts.filter((product)=>{
      return product.id == id;
    })
    setDetailData(DetailData);
  }

  useEffect(()=>{
    getDetailData();
  },[])

  return (
    <div>
      <Header />

      <div className="detail-section">
        <div className="container">
          <div className="detail-wrapp">
            {detailData.map((item)=>{
              console.log(item);
              return(
                <>
                  <div className="detail-img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="detail-content">
                    <h6>Title: {item.title.slice(0, 100)}...</h6>
                    <h6>Brand: {item.brand}</h6>
                    <h6>Category: {item.category}</h6>
                    <h6>Color: {item.color}</h6>
                    <h6>Model: {item.model}</h6>
                    <h6>Description</h6>
                    <p>{item.description.slice(0, 350)}...</p>
                    <h6>Price: {item.price} Rs</h6>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
