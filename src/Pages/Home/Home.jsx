import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import Banner from "../../Components/Banner/Banner";
import DiscountCards from "../../Components/Common/DiscountCards/DiscountCards";
import { DiscountCardsData } from "../../Components/Common/DiscountCards/DiscountCardsData";
import CategorySlider from "../../Components/Common/CategorySlick/CategorySlick";
import "./Home.css";
import { ProductContext } from "../../Context/Context";
import FeatureBox from "../../Components/Common/Feature/FeatureBox";
import Modal from "../../Components/Common/Feature/Modal/Modal";
import FlashSlick from "../../FlashSlick/FlashSlick";
import SecondCards from "../../Components/Common/SecondCards/SecondCards";
import { FlashContext } from "../../Context/FlashContext";

const Home = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/categories"
      );
      console.log(response);
      setCategories(response?.data);
    } catch (error) {
      console.error("Error fetching category data:", error);
    }
  };

  useEffect(() => {
    fetchCategoryData();
  }, []);

  const contextData = useContext(ProductContext);
  console.log(contextData);
  const { products, setProducts } = contextData;

  const flashProductData = useContext(FlashContext);

  const { Flashproducts, setFlashProducts } = flashProductData;
  const [halfproModal, sethalfproModal] = useState(false);

  const [filpro, setfilpro] = useState([]);

  const productModalHandle = (item) => {
    sethalfproModal(true);

    const productFilter = Flashproducts.slice(0, 20).filter((product) => {
      return product.id == item;
    });
    setfilpro(productFilter);
  };

  return (
    <div className="home-wrapper">
      <Header />
      <Banner />
      <div className="discoutCards">
        <div className="container">
          <div className="iscoutCards-wrapper">
            {DiscountCardsData.map((item, index) => (
              <DiscountCards key={index} data={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Pass the entire categories array as a prop to the CategorySlider */}
      <div className="category">
        <div className="container">
          <CategorySlider data={categories} />
        </div>
      </div>
      {/* Pass the entire categories array as a prop to the CategorySlider */}

      <div className="feature-product">
        <div className="container">
          <div className="feature">
            <h2>Feature Products</h2>
            <div className="feature-wrpper">
              {products.map((item) => {
                return <FeatureBox key={item.id} data={item} />;
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flash">
        <div className="container">
          <h2>Flash Product</h2>
          <div className="flash-product">
            <FlashSlick />
          </div>
        </div>
      </div>

      <div className="all-products">
        <div className="container">
          <h2>All Products</h2>
          <div className="all-product-wrapper">
            {Flashproducts.slice(0, 20).map((item) => {
              return (
                <SecondCards
                  handleProduct={productModalHandle}
                  key={item.id}
                  data={item}
                />
              );
            })}
          </div>
        </div>
      </div>

      {halfproModal && (
        <Modal>
          <div className="modal-wrapper">
            <button onClick={() => sethalfproModal(false)} className="closeBtn">
              X
            </button>
            {filpro.map((item) => {
              return (
                <div className="modal-wrap" key={item.id}>
                  <div className="modal-img">
                    <img src={item.image} alt={item.title || "Product Image"} />
                  </div>
                  <div className="content-box">
                    <h5>
                      {item.title ? item.title.slice(0, 70) : "No Title"}...
                    </h5>
                    <h5>Category: ({item.category})</h5>
                    <h5>Color: {item.color}</h5>
                    <h5>Model: {item.model}</h5>
                    <p>
                      {item.description
                        ? item.description.slice(0, 300)
                        : "No description available"}
                      ...
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Home;
