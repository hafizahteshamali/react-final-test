import { NavLink } from "react-router-dom"
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-wrapper">
            <NavLink to="/"><img src="../assets/images/logo.svg"/></NavLink>

            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/product">Products</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
