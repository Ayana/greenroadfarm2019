import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
	overflow: hidden;
	position: absolute;
	width: 100%;
	min-height: 100px;
	padding-top: 10px;
	footer {
		align-items: center;
		.copyright {
			color: #fff;
			position: absolute;
			width: 100%;
			z-index: 10;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.wave-one {
			border-top-right-radius: 740px 60px;
			border-top-left-radius: 1400px 30px;
			margin-left: -20px;
			margin-right: -150px;
			padding-left: 20px;
			padding-right: 150px;
			position: absolute;
			background-color: #79ad3f;
			min-height: 100px;
			width: 110%;
		}
		.wave-two {
			border-top-right-radius: 1000px 140px;
			border-top-left-radius: 900px 100px;
			margin-left: -190px;
			margin-right: -100px;
			padding-left: 190px;
			padding-right: 100px;
			position: absolute;
			background-color: #79ad3f;
			top: 0px;
			min-height: 100px;
			opacity: .8;
			width: 100%;
		}
	}
  @media (min-width: 750px) {
  }
`;

const Footer = () => (
  <FooterWrapper>
		<footer>
			<p className="copyright font-display">
				© {new Date().getFullYear()} GreenRoadFarm
			</p>
			<div className="wave-one"></div>
			<div className="wave-two"></div>
		</footer>
  </FooterWrapper>
)


export default Footer
