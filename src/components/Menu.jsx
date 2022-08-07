import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.scss';
import MyOrder from '../containers/MyOrder';
// import MyAccount from '../pages/MyAccount';
import Home from '../pages/Home';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
				<NavLink
							to={Home}
							>            
							My Orders
					</NavLink>					
				</li>
				<li>
				<NavLink
							to={Home}
							>            
							My Account
					</NavLink>		
				</li>
				<li>
					<NavLink
							to={Home}
							>            
							Sign out
					</NavLink>					
				</li>
			</ul>
		</div>
	);
}

export default Menu;