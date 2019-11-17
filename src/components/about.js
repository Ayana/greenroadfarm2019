import React from "react"
import Image from "gatsby-image"
import styled from "styled-components"

const AboutWrapper = styled.div`
  @media (min-width: 750px) {
    padding: 3em 0 8em;
    .about-wave {
      margin-top: -24%;
      margin-bottom: -80px;
    }
    .about-item {
      padding: 3em 0 0;
      position: relative;
      display: flex;
      justify-content: flex-end;
      .about-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 600px;
      }
      .about-box {
        background: rgba(255,255,255,0.8);
        position: relative;
        padding: 4em 4em 3em;
        max-width: 600px;
        margin-top: 120px;
        margin-bottom: 6em;
        h3 {
          margin-bottom: 1.6em;
        }
      }
    }
  }
 @media (max-width: 750px) {
    padding: 3em 0;
    .about-wave {
      margin-top: -130px;
      margin-bottom: -40px;
    }
    .about-item {
      .about-box {
        h3 {
          margin: 1.6em 0 1em;
          line-height: 1.5;
        }
      }
    }
  }
`;

const About = () => {
	return (
		<AboutWrapper id="about" className="sec-about">
			<div className="about-wave">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,170.7C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
			</div>
			<div className="container">
				<h2 className="font-display">ABOUT</h2>
				<p className="lead narrow">GreanRoadFarm（グリーンロードファーム）は、長野県松本市の里山にあるフルーツ農園です。<br />
	あんずやワッサーなどの果樹を植えることで、荒廃した農地を活用し、旬の味や豊かな自然を楽しめる地域づくりを目指しています。</p>
				<div className="about-item">
					<div className="about-img">
						{/* <Image fluid={props.data.about1.childImageSharp.fluid} /> */}
						{/* <Image fluid={props.data.about1.childImageSharp.fluid} /> */}
					</div>
					<div className="about-box">
						<h3 className="font-min">荒廃した土地を活用したフルーツ農園です</h3>
						<div>
							<p>グリーンロードファームの農園は、利用されなくなり荒廃し始めた土地を活用しています。そのため、当農園をご利用・ご来園いただくことが、耕作放棄地活用・持続可能な地域づくりへの協力となります。</p>
							<p>当農園は、グリーンロードファーム会員とオーナー会員によって運営されています。会員が、草刈り・剪定・摘果・消毒等の管理することで、収穫シーズンには旬のフルーツを楽しんでいただくことができます。</p>
						</div>
					</div>
				</div>
				<div className="about-item">
					<div className="about-img">
						{/* <Image fluid={props.data.about2.childImageSharp.fluid} /> */}
					</div>
					<div className="about-box">
						<h3 className="font-min">長野県だからこそ味わえるフルーツです</h3>
						<div>
							<p>グリーンロードファームで現在栽培しているフルーツは、長野県での生産量が日本一の杏（あんず）、長野県生まれのワッサーの2種類です。</p>
							<p>どちらも長野県では身近ですが、市場に出回る量が少ないフルーツ。そんなあんずとワッサーを、旬の一番おいしい時期に食べられるのは、生産地だからこそ味わえる贅沢です。</p>
							<p>会員のみなさんは、ぜひ旬の時期にご来園のうえ、生フルーツを味わってみてください。</p>
						</div>
					</div>
				</div>
				<div className="about-item">
					<div className="about-img">
						{/* <Image fluid={props.data.about3.childImageSharp.fluid} /> */}
					</div>
					<div className="about-box">
						<h3 className="font-min">自然豊かな信州の里山です</h3>
						<div>
							<p>グリーンロードファームがある長野県松本市は、昼と夜の寒暖の差が大きく、さらに農園がある里山は南向きで粘土質。この環境が果樹栽培に非常に適しています。また、自然豊かでアルプスの山々が見ることができる農園からの景色は非常に気持ちのよいものです。</p>
							<p>ご来園の際は、フルーツだけでなく、豊かな自然と美しい景色をお楽しみください。</p>
						</div>
					</div>
				</div>
			</div>
		</AboutWrapper>
	)
}

export default About

