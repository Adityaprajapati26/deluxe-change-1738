import React, { useState } from "react";
import "./navbar.css";
import { BsSearch} from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdPersonOutline } from "react-icons/md";
import { CgShoppingBag } from "react-icons/cg";

import { NavLink } from "react-router-dom";

const Navbar = () => {
	const [showMediaIcons, setShowMediaIcons] = useState(false);
	return (
		<>
			<nav className="navbar">
				<div className="icons">
					<div className="hamburger-menu">
						<a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
							<GiHamburgerMenu className="stroke" />
						</a>
					</div>
				</div>
				{/* 1st logo part  */}
				<div className="logo">
					<h2>
						<img
							src="https://cdn.shopify.com/s/files/1/0627/7388/7215/files/04122019_logo2_90x.png?v=1645644264"
							alt=""
						/>
					</h2>
				</div>

				{/* 2nd menu part  */}
				<div
					className={
						showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
					}
				>
					<ul>
						<li>
							<NavLink to="/">Home</NavLink>
						</li>
						<li>
							<NavLink to="/New">New</NavLink>
						</li>
						<li>
							<NavLink to="/ShopAll">Shop All</NavLink>
						</li>
						<li>
							<NavLink to="/Earrings">Earrings</NavLink>
						</li>
						<li>
							<NavLink to="/Necklaces">Necklaces</NavLink>
						</li>
						<li>
							<NavLink to="/Bracelets">Bracelets</NavLink>
						</li>
						<li>
							<NavLink to="/Rings">Rings</NavLink>
						</li>
						<li>
							<NavLink to="/ShopSocial">Shop Social</NavLink>
						</li>
					</ul>
				</div>

				{/* 3rd social media links */}
				<div className="icon">
					<ul className="icon-desktop">
						<li>
							<NavLink to="/">
								<BsSearch className="search" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/">
								<MdPersonOutline className="person" />
							</NavLink>
						</li>
						<li>
							<NavLink to="/">
								<CgShoppingBag className="bag" />
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
