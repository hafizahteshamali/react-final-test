
import { useNavigate } from 'react-router';


const SecondCards = ({ data, handleProduct, btn }) => {
  const navigate = useNavigate();

  const { image, title, category, price, id } = data;
  return (
    <div onClick={()=>handleProduct(id)} className="card" style={{ width: "16rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <p>{title.slice(0, 25)}...</p>
        <p>Category: {category}</p>
        <p>Price: {price} Rs</p>
        {btn && <button onClick={()=>navigate(`/product/${id}`)} className="viewBtn">View Details</button>}
      </div>
    </div>
  );
};

export default SecondCards;
