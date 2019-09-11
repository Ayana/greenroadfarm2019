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
				font-weight: bold;
				color: #585858;
				transition: .3s;
				&:hover {
					opacity: 0.6;
				}
			}
		}
	}
  @media (min-width: 751px) {
		.nav-links {
			margin-right: -20px;
			a {
				padding: 20px;
			}
		}
  }
  @media (max-width: 750px) {
		.nav-wrap {
			display: block;
			img {
				max-width: 180px;
			}
			.nav-links {
				margin-right: -10px;
				margin-top: 5px;
				text-align: center;
				a {
					padding: 10px;
				}
			}
		}
  }
`;

const Nav = () => {
	return (
		<NavWrapper>
			<div className="container">
				<div className="nav-wrap">
					<h1><Logo /></h1>
					<div className="nav-links font-display">
						<a href="#about">ABOUT</a>
						<a href="#fruit">FRUITS</a>
						<a href="#location">LOCATION</a>
					</div>
				</div>
			</div>
		</NavWrapper>
	)
}


export default Nav
