import React from "react"

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
			<div>
				<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FGreenRoadFarm&tabs=timeline&width=350&height=500&small_header=false&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=341911879232985" width="350" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
			</div>
		</div>
	)
}



export default Social

