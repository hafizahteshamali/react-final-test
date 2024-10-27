import React, { useContext, useState } from "react";
import "./FeatureBox.css";
import Modal from "./Modal/Modal";
import { FlashContext } from "../../../Context/FlashContext";

const FeatureBox = ({ data }) => {
  const { brand, category, image, title, price, discount, id } = data;
  const [FeatureId, setFeatureId] = useState(null);
  const [isModal, setIsModal] = useState(false);

  const handleClick = (id) => {
    setFeatureId(id);
    setIsModal(true);
  };

  const FlashData = useContext(FlashContext);
  const { Flashproducts } = FlashData;

  const filterData = Flashproducts.filter((item) => {
    return item.id === FeatureId;
  });

  return (
    <>
      <div onClick={() => handleClick(id)} className="feature-box">
        <div className="img-box">
          <img src={image} alt={title} />
        </div>
        <div className="product-details">
          <p>{category}</p>
          <p className="price">
            <span className="original-price">${price}</span>
            <span className="discount-price">${discount}</span>
          </p>
        </div>
      </div>

      {isModal && (
        <Modal>
          <div className="modal-wrapper">
            <button onClick={() => setIsModal(false)} className="closeBtn">
              X
            </button>
            {filterData.map((item)=>{
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
      )}
    </>
  );
};

export default FeatureBox;
