import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Menu.scss';
import Home from '../pages/Home';

const Menu = () => {
	return (
		<div className="Menu">
			<ul>
				<li>
					<NavLink
							to={Home}
							>            
							My orders
					</NavLink>					
				</li>
				<li>
					<NavLink
							to={Home}
							>            
							My account
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