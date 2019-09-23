import React from "react"
import Background from "../images/visual_img01.jpg"
import styled from "styled-components"


const VisualWrapper = styled.div`
  @media (min-width: 751px) {
    height: 800px;
  }
  @media (max-width: 750px) {
    height: 500px;
    padding-top: 20px;
  }
  width: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -110px;
  color: #fff;
  .visual-wrap {
    display: flex;
    height: 100%;
  }
  .fade-in {
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.2s;
  }
  .fade-in.one {  animation-delay: 0.4s;}
  .fade-in.two {  animation-delay: 0.45s;}
  .fade-in.three {  animation-delay: .5s;}
  .fade-in.four{  animation-delay: .55s}
  .fade-in.five {  animation-delay: .6s;}
  .fade-in.six {  animation-delay: .65s;}
  .fade-in.seven {  animation-delay: .7s}
  .fade-in.eight {  animation-delay: .75s;}
  .fade-in.nine {  animation-delay: .8s;}
  .fade-in.ten {  animation-delay: .85s;}
  .fade-in.eleven {  animation-delay: .9s;}
  .fade-in.twelve {  animation-delay: .95s;}
  .fade-in.thirteen {  animation-delay: 1s;}
  .fade-in.fourteen {  animation-delay: 1.05s;}
  .fade-in.fifteen {  animation-delay: 1.1s;}
  .fade-in.sixteen {  animation-delay: 1.15s;}
  .fade-in.seventeen {  animation-delay: 1.2s;}
  .fade-in.eighteen {  animation-delay: 1.25s;}
  .fade-in.nineteen {  animation-delay: 1.3s;}
  .fade-in.twenty {  animation-delay: 1.35s;}
  .fade-in.twentyone {  animation-delay: 1.4s;}
  .fade-in.twentytwo {  animation-delay: 1.45s;}
  .fade-in.twentythree {  animation-delay: 1.5s;}
  .fade-in.caption {  animation-delay: 2.2s;}
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const Visual = () => {
	return (
		<VisualWrapper>
			<div className="visual-wrap">
				<div
					style={{
						maxWidth: '800px',
						margin: 'auto',
						padding: '10px 15px',
						textAlign: 'center',
					}} 
				>
				<p className="font-script"　style={{fontSize: '2.8rem', lineHeight: '1.2',marginBottom: '0.4em',}}>
					<span className="fade-in one">E</span>
					<span className="fade-in two">n</span>
					<span className="fade-in three">j</span>
					<span className="fade-in four">o</span>
					<span className="fade-in five">y</span>
					<span className="fade-in six"> o</span>
					<span className="fade-in seven">u</span>
					<span className="fade-in eight">r</span>
					<span className="fade-in nine"> S</span>
					<span className="fade-in ten">e</span>
					<span className="fade-in eleven">a</span>
					<span className="fade-in twelve">s</span>
					<span className="fade-in thirteen">o</span>
					<span className="fade-in fourteen">n</span>
					<span className="fade-in fifteen">a</span>
					<span className="fade-in sixteen">l</span>
					<span className="fade-in seventeen"> F</span>
					<span className="fade-in eighteen">r</span>
					<span className="fade-in nineteen">u</span>
					<span className="fade-in twenty">i</span>
					<span className="fade-in twentyone">t</span>
					<span className="fade-in twentytwo">s</span>
					<span className="fade-in twentythree">!</span>
					</p>
				<p className="fade-in caption font-min" style={{fontSize: '1.05rem',fontWeight: 'bold',}}>旬の味と自然を満喫できる信州・松本のフルーツ農園です</p>
				</div>
			</div>
		</VisualWrapper>
	)
}


export default Visual

