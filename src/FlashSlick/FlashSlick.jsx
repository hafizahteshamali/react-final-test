import { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import "./FlashSlick.css";
import { FlashContext } from "../Context/FlashContext";
import Cards from "../Components/Common/Cards/Cards";
import { Autoplay } from "swiper/modules";
import Modal from "../Components/Common/Feature/Modal/Modal";

export default function FlashSlick() {
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const FlashData = useContext(FlashContext);
  const { Flashproducts, setFlashProducts } = FlashData;


  const [ProdModal, setProdModal] = useState(false);

  const[selectedData, setSelectedData] =  useState([]);

  const clickHandle = (item)=>{
       const filterData = Flashproducts.filter((pro)=>{
      return pro.id == item;
    })
    setSelectedData(filterData)
    setProdModal(true);
  }

  return (
    <>
      <Slider {...settings}>
      {Flashproducts.map((item) => {
        return (
          <div key={item.id} className="card-wrapper">
            <Cards data={item} onCardClick={clickHandle}/>
          </div>
        );
      })}
    </Slider>

    {
      ProdModal && 
      <Modal>
          <div className="modal-wrapper">
          <button onClick={() => setProdModal(false)} className="closeBtn">
              X
            </button>
            {selectedData.map((item)=>{
              return(
                   <div className="modal-wrap" key={item.id}>
                <div className="modal-img">
                  <img src={item.image} alt={item.title || "Product Image"} />
                </div>
                <div className="content-box">
                  <h5>{item.title ? item.title.slice(0, 70) : "No Title"}...</h5>
                  <h5>Category: ({item.category})</h5>
                  <h5>Color: {item.color}</h5>
                  <h5>Model: {item.model}</h5>
                  <p>{item.description ? item.description.slice(0, 300) : "No description available"}...</p>
                </div>
              </div>
              )
            })}
          </div>
      </Modal>
    }
    </>
  );
}
