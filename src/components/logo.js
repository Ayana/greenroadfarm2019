import React from "react"
import logo from '../images/logo.svg'

const Logo = () => {
	return (
		<div className="font-logo">
			<img
				style={{
					marginBottom: 0,
					width: '250px',
				}}
				src={logo}
				alt="Green Road Farm"
			/>
			{/* Green Road Farm */}
		</div>
	)
}



export default Logo

