import React from "react"
import styled from "styled-components"

const FacebookWrapper = styled.div`
	overflow:hidden;
	padding-bottom:86.25%;
	position:relative;
	height:0;
	iframe {
		left:0;
		top:0;
		height:100%;
		width:100%;
		position:absolute;
	}
`;


const Social = () => {
	return (
		<div
			className="container"
			style={{
				textAlign: 'center',
				marginBottom: '5em',
			}}
		>
			<div
				className="font-script"
				style={{
					marginBottom:'1em',
					fontSize: '2rem',
				}}
			>
				\ What's New /
			</div>
			<FacebookWrapper>
				<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGreenRoadFarm&tabs=timeline&width=600&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=341911879232985" width="500" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
			</FacebookWrapper>
		</div>
	)
}



export default Social

