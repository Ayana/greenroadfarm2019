import React from "react"
import Logo from "../components/logo"

import styled from "styled-components"

const NavWrapper = styled.div`
	.nav-wrap {
		display: flex;
		margin: 1em 0;
		align-items: center;
		justify-content: space-between;
		h1 {
			margin: 0;
		}
		.nav-links {
			a {
				padding: 10px;
			}
		}
	}
  @media (min-width: 750px) {
  }
`;

const Nav = () => {
	return (
		<NavWrapper>
			<div className="container">
				<div className="nav-wrap">
					<h1><Logo /></h1>
					<div className="nav-links">
						<a href="#about">About</a>
						<a href="#fruit">Our Fruits</a>
						<a href="#location">Location</a>
					</div>
				</div>
			</div>
		</NavWrapper>
	)
}


export default Nav
