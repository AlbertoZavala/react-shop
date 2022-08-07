import React, { useState, useContext } from 'react'
import Menu from '@components/Menu'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'
import '@styles/Header.scss'
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import shoppingCart from '@icons/icon_shopping_cart.svg'
import { NavLink } from 'react-router-dom'
import Home from '../pages/Home'


const Header = () => {
  const [ toggle, setToggle ] = useState(false);
  const [ toggleOrders, setToggleOrders ] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  }

  return (
    <nav>
    <img src={menu} alt="menu" className="menu"/>

    <div className="navbar-left">
      <img src={logo} alt="logo" className="nav-logo"/>

      <ul>
        <li>
          <NavLink
            to={Home}
            >
            All
          </NavLink>          
        </li>
        <li>
          <NavLink
            to={Home}
            >            
            Clothes
          </NavLink>          
        </li>
        <li>
        <NavLink
            to={Home}
            >            
            Electronics
          </NavLink>                    
        </li>
        <li>
        <NavLink
            to={Home}
            >            
            Furnitures
          </NavLink>                    
        </li>
        <li>
          <NavLink
              to={Home}
              >            
              Toys
          </NavLink> 
        </li>
        <li>
          <NavLink
              to={Home}
              >            
              Others
          </NavLink>            
        </li>
      </ul>
    </div>

    <div className="navbar-right">
      <ul>
        <li 
          className="navbar-email" 
          onClick={ handleToggle }>
            jose.alberto.zavala.flores@gmail.com
        </li>
        <li 
          className="navbar-shopping-cart" 
          onClick={() => setToggleOrders(!toggleOrders) }>
            <img src={shoppingCart} alt="shopping cart"/>          
            {
              state.cart.length > 0 && <div>${state.cart.length}</div>
            }          
        </li>
      </ul>
    </div>
    { toggle && <Menu/> }
    { toggleOrders && <MyOrder/> }    

  </nav>
  )
}

export default Header;