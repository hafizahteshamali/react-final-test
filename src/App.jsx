import React from 'react'
import Home from './Pages/Home/Home'
import { RoutesData } from './Routes/index.jsx';
import { Route, Routes } from 'react-router';
import "./App.css";

const App = () => {
  return (
    <Routes>
      {RoutesData.map((item, index)=>{
        return(
          <Route key={index} path={item.path} element={item.element}/>
        )
      })}
    </Routes>
  )
}

export default App
