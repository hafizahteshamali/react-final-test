import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])

    const getProductData = async ()=>{
        try {
            const productData = await axios.get('https://fakestoreapi.in/api/products')
            const response = productData?.data.products;
            setProducts(response.slice(0, 4));
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductData();
    },[])
  
    return(
        <ProductContext.Provider value={{products, setProducts}}>
        {children}
        </ProductContext.Provider>
    )
};
