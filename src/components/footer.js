import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.div`
	border-top-right-radius: 1000px 100px;
	border-top-left-radius: 1000px 80px;
	margin-left: -100px;
	margin-right: -200px;
	padding-left: 100px;
	padding-right: 200px;
	position: relative;
	background-color: #79ad3f;
	min-height: 100px;
	opacity: .8;
	footer {
		text-align: center;
    min-height: 80px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
		.copyright {
			color: #fff;
			margin-bottom: 0;
			position: relative;
		}
		.wave-one {
			border-top-right-radius: 1000px 140px;
			border-top-left-radius: 900px 100px;
			margin-left: -240px;
			margin-right: -80px;
			padding-left: 100px;
			padding-right: 100px;
			position: absolute;
			background-color: #79ad3f;
			top: -10px;
			min-height: 100px;
			opacity: .8;
			width: 100%;
			z-index: -1;
		}
	}
  @media (min-width: 750px) {
  }
`;

const Footer = () => (
  <FooterWrapper>
		<footer
			style={{textAlign: 'center'}}
			>
			<p className="copyright">
				© {new Date().getFullYear()} GreenRoadFarm
			</p>
			<div className="wave-one"></div>
		</footer>
  </FooterWrapper>
)


export default Footer
