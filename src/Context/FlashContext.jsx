import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const FlashContext = createContext();

export const FlashContextProvider = ({ children }) => {
    const [Flashproducts, setFlashProducts] = useState([])

    const getProductData = async ()=>{
        try {
            const productData = await axios.get('https://fakestoreapi.in/api/products')
            const resp = productData?.data.products;
            setFlashProducts(resp);
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProductData();
    },[])
  
    return(
        <FlashContext.Provider value={{Flashproducts, setFlashProducts}}>
        {children}
        </FlashContext.Provider>
    )
};
