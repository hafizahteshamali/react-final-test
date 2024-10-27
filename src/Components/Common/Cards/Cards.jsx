import { useContext, useEffect, useState } from "react";
import "./Cards.css";
import { FlashContext } from "../../../Context/FlashContext";
import Modal from "../Feature/Modal/Modal";

const Cards = ({ data, proMod, setProMod, onCardClick}) => {

  const { image, title, category, price, id } = data;

  const flashContextData = useContext(FlashContext);

  const [productId, setProductId] = useState(null);
  const [filteredProduct, setFilterProduct] = useState([]);

  return (
    <>
      <div onClick={()=>onCardClick(id)} className="card" style={{ width: "16rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <p>{title.slice(0, 25)}...</p>
          <p>Category:   {category}</p>
          <p>Price: {price} Rs</p>
        </div>
      </div>
    </>
  );
};

export default Cards;
