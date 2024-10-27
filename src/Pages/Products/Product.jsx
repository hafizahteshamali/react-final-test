import React, { useContext, useEffect, useState } from 'react'
import "./Product.css";
import Header from "../../Components/Header/Header.jsx";
import Banner from "../../Components/Banner/Banner.jsx"
import { FlashContext } from '../../Context/FlashContext.jsx';
import SecondCards from '../../Components/Common/SecondCards/SecondCards.jsx';

const Product = () => {

  const FlashProdData = useContext(FlashContext);
  const{Flashproducts, setFlashProducts} = FlashProdData;
  const [categories, setCategories] = useState([]);
  const [filterCat, setFilterCat] = useState([])
  const [inputs, setInputs] = useState('')

  const [notFound, setnotFound] = useState(false);

  const categoryData = ()=>{
    const categ = [...new Set(Flashproducts.map((item)=>item.category))]
    setCategories(categ);
  }

  const categoryFilter = (cat)=>{
      const filterData = Flashproducts.filter((filPro)=>{
        return filPro.category == cat;
      })
      if(cat == "All"){
        setFilterCat(Flashproducts)
      }
      else{
        setFilterCat(filterData)
      }
  }

  const DirectSearching = (e)=>{
    if(e.key == "Enter"){
      searching();
    }
  }

  const searching = ()=>{
    if(filterCat.length <= 0){
      setnotFound(true);
    }
    else{
      const searchData = filterCat.filter((item)=>{
        return item.title.toLowerCase().includes(inputs.toLowerCase());
      })
      setFilterCat(searchData)
    }    
  }

  useEffect(()=>{
    categoryData();
    setFilterCat(Flashproducts);
  },[Flashproducts])

  return (
    <div>
      <Header/>

      {/* <Banner/> */}

      <div className="container">
        <div className="search-wrapper">
        <select onChange={(e)=>categoryFilter(e.target.value)}>
        <option value="All">Select any category</option>
        {categories.map((item, index)=>{
          return(
            <option value={item} key={index}>{item}</option>
          )
        })}
      </select>

        <div className="input-wrapp">
        <input onKeyUp={(e)=>DirectSearching(e)} value={inputs} onChange={(e) => setInputs(e.target.value)} type="text" placeholder="Enter any product..."/>
        <button onClick={() => searching()}>Search</button>
        </div>
        </div>
      </div>

      <div className="product-wrapper">
        <div className="container">
          <div className="prod-wrap">
            {filterCat.map((item)=>{
              return(
                <SecondCards key={item.id} data={item} btn/>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Product
