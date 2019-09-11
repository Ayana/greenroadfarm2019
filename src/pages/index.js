import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import Social from "../components/social"
import Background from "../images/visual_img01.jpg"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutWrapper = styled.div`
  @media (min-width: 750px) {
    padding: 3em 0 8em;
    .about-wave {
      margin-top: -280px;
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
        margin-top: 140px;
        margin-bottom: 6em;
        h3 {
          margin-bottom: 1.6em;
        }
      }
    }
  }
 @media (max-width: 750px) {
    padding: 3em 0 8em;
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

const FruitWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  @media (min-width: 751px) {
    .fruit-wave {
      background-color: #E7E8E3;
      border-top-right-radius: 1000px 80px;
      border-top-left-radius: 1000px 80px;
      margin-left: -100px;
      margin-right: -100px;
      padding-left: 100px;
      padding-right: 100px;
      padding: 7em 0 12em;
    }
    .fruit-item {
      padding: 3em 0 0;
      position: relative;
      display: flex;
      justify-content: flex-end;
      .fruit-ttl-wrap {
        position: absolute;
        right: 20px;
        font-size: 12rem;
        top: 20px;
      }
      .fruit-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 600px;
      }
      .fruit-box {
        background: rgba(255,255,255,0.8);
        padding: 5em 5em 3em;
        max-width: 600px;
        margin-top: 140px;
        margin-bottom: 6em;
        position: relative;
        .fruit-box-inner {
          position: relative;
          h4 {
            font-size: 1.5rem;
            margin-bottom: 1.5em;
            line-height: 1.4;
          }
        }
      }
    }
    .fruit-item.right {
      .fruit-ttl-wrap {
        left: 20px;
        right: inherit;
      }
      .fruit-img {
        right: 0;
        left: inherit;
      }
    }
  }
  
  @media (max-width: 750px) {
    .fruit-wave {
      background-color: #E7E8E3;
      border-top-right-radius: 500px 80px;
      border-top-left-radius: 500px 80px;
      margin-left: -10px;
      margin-right: -10px;
      padding-left: 100px;
      padding-right: 100px;
      padding: 3em 0 16em;
    }
    .fruit-item {
      .fruit-ttl-wrap {
        padding: 2em 0 0;
      }
      .fruit-img {
      }
      .fruit-box {
        .fruit-box-inner {
          h4 {
            line-height: 1.5;
          }
        }
      }
    }
  }
  .fruit-wave-b {
    margin-top: -300px;
    margin-bottom: -20px;
  }
`;

const LocationWrapper = styled.div`
  @media (min-width: 751px) {
    padding: 0 0 8em;
  }
  @media (max-width: 750px) {
    padding: 0 0 5em;
  }
`;

const VisualWrapper = styled.div`
  @media (min-width: 751px) {
    height: 800px;
  }
  @media (max-width: 750px) {
    height: 500px;
  }
  width: 100%;
  background-image: url(${Background});
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: -100px;
  color: #fff;
  .visual-wrap {
    display: flex;
    height: 100%;
    border-bottom: 15px solid rgba(255,255,255,0.8);
  }
  .fade-in {
    opacity:0;
    animation:fadeIn ease-in 1;
    animation-fill-mode:forwards;
    animation-duration:0.2s;
  }
  .fade-in.one {  animation-delay: 0.1s;}
  .fade-in.two {  animation-delay: .15s;}
  .fade-in.three {  animation-delay: .2s;}
  .fade-in.four{  animation-delay: .25s}
  .fade-in.five {  animation-delay: .3s;}
  .fade-in.six {  animation-delay: .35s;}
  .fade-in.seven {  animation-delay: .4s}
  .fade-in.eight {  animation-delay: .45s;}
  .fade-in.nine {  animation-delay: .5s;}
  .fade-in.ten {  animation-delay: .55s;}
  .fade-in.eleven {  animation-delay: .6s;}
  .fade-in.twelve {  animation-delay: .65s;}
  .fade-in.thirteen {  animation-delay: .7s;}
  .fade-in.fourteen {  animation-delay: .75s;}
  .fade-in.fifteen {  animation-delay: .8s;}
  .fade-in.sixteen {  animation-delay: .85s;}
  .fade-in.seventeen {  animation-delay: .9s;}
  .fade-in.eighteen {  animation-delay: .95s;}
  .fade-in.nineteen {  animation-delay: 1s;}
  .fade-in.twenty {  animation-delay: 1.05s;}
  .fade-in.twentyone {  animation-delay: 1.1s;}
  .fade-in.twentytwo {  animation-delay: 1.15s;}
  .fade-in.twentythree {  animation-delay: 1.2s;}
  .fade-in.caption {  animation-delay: 1.4s;}
  @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;


const IndexPage = props => (
  <Layout>
    <SEO title="グリーンロードファーム" />
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

    <AboutWrapper id="about" className="sec-about">
      <div className="about-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,192L60,165.3C120,139,240,85,360,90.7C480,96,600,160,720,170.7C840,181,960,139,1080,122.7C1200,107,1320,117,1380,122.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,160L60,149.3C120,139,240,117,360,128C480,139,600,181,720,186.7C840,192,960,160,1080,160C1200,160,1320,192,1380,208L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
      </div>
      <div className="container">
        <h2 className="font-display">ABOUT</h2>
        <p className="lead narrow">GreanRoadFarm（グリーンロードファーム）は、長野県松本市の里山にあるフルーツ農園です。<br />
  あんずやワッサーなどの果樹を植えることで、荒廃した農地を活用し、旬の味や豊かな自然を楽しめる地域づくりを目指しています。</p>
        <div className="about-item">
          <div className="about-img">
            <Image fluid={props.data.about1.childImageSharp.fluid} />
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
            <Image fluid={props.data.about2.childImageSharp.fluid} />
          </div>
          <div className="about-box">
            <h3 className="font-min">長野県だからこそ味わえるフルーツです</h3>
            <div>
              <p>グリーンロードファームで現在栽培しているフルーツは、長野県での生産量が日本一の杏（あんず）、長野県生まれのワッサーの2種類です。</p>
              <p>どちらも長野県では身近ですが、市場に出回る量が少ないフルーツです。そんなフルーツを、旬の一番おいしい時期に食べる生あんず、生ワッサーは、生産地だからこそ味わえる贅沢です。</p>
              <p>今後、多くの実ができる収穫シーズンには数量限定にて販売も行う予定です。ぜひ、会員のみなさんは旬の時期にご来園のうえ、生フルーツを味わってみてください。</p>
            </div>
          </div>
        </div>
        <div className="about-item">
          <div className="about-img">
            <Image fluid={props.data.about3.childImageSharp.fluid} />
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

    <FruitWrapper id="fruit" className="sec-fruit">
      <div className="fruit-wave">
      <div className="container">
        <h2 className="font-display">OUR FRUITS</h2>
        <p className="lead narrow">グリーンロードファームで栽培しているフルーツは、あんずとワッサーの2種類。<br />
  どちらも抜群のおいしさですが手に入れにくいフルーツ。ぜひ生の味をお楽しみください。</p>
        <div className="fruit-item">
          <div className="fruit-img">
            <Image fluid={props.data.fruitApricot.childImageSharp.fluid} />
          </div>
          <div className="fruit-box">
            <div className="fruit-ttl-wrap">
              <h3 className="font-min vertical">あんず</h3>
            </div>
            <div className="fruit-box-inner">
              <h4 className="font-min">穫れたてを生で食べるのが最高の贅沢</h4>
              <p>あんずは収穫時期が短く、痛みが早いため、生あんずは市場にあまり多くは出回りません。そのため、生で食べたことがない人も多いはず。</p>
              <p>収穫したての生あんずのおいしさは格別です。生の味わいを堪能した、さらに、ジャムやお菓子、お酒として味わえる、一度に二度も三度も楽しめます。</p>
              <p>グリーンロードファームでは、あんずの中でも大きく甘味が強い品種、おひさまコット、ニコニコット、信州サワーの3種類を生産しています。</p>
            </div>
          </div>
        </div>
        <div className="fruit-item">
          <div className="fruit-img">
            <Image fluid={props.data.fruitWasser.childImageSharp.fluid} />
          </div>
          <div className="fruit-box">
            <div className="fruit-ttl-wrap">
              <h3 className="font-min vertical">ワッサー</h3>
            </div>
            <div className="fruit-box-inner">
              <h4 className="font-min">地元ファン多し！<br />信州生まれの絶品フルーツ</h4>
              <p>ワッサーは、桃とネクタリンを掛け合わせた長野県生まれのフルーツ。長野県での知名度は高いのですが、県外ではまだまだ出荷量が少ない、おすすめ新フルーツです。</p>
              <p>桃の甘味とネクタリンの酸味がちょうどよーく混ざった絶妙なバランスと、とろける食感で、口の中においしさが広がります。ぜひこの新しい味わいを体験してみてください。</p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="fruit-wave-b">
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,224L40,192C80,160,160,96,240,74.7C320,53,400,75,480,112C560,149,640,203,720,192C800,181,880,107,960,74.7C1040,43,1120,53,1200,74.7C1280,96,1360,128,1400,144L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,96L60,112C120,128,240,160,360,149.3C480,139,600,85,720,58.7C840,32,960,32,1080,37.3C1200,43,1320,53,1380,58.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,96L40,85.3C80,75,160,53,240,48C320,43,400,53,480,90.7C560,128,640,192,720,213.3C800,235,880,213,960,176C1040,139,1120,85,1200,85.3C1280,85,1360,139,1400,165.3L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg> */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f9f9f9" fill-opacity="1" d="M0,192L30,186.7C60,181,120,171,180,176C240,181,300,203,360,224C420,245,480,267,540,256C600,245,660,203,720,181.3C780,160,840,160,900,176C960,192,1020,224,1080,240C1140,256,1200,256,1260,245.3C1320,235,1380,213,1410,202.7L1440,192L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path></svg>
      </div>
    </FruitWrapper>

    <LocationWrapper id="location" className="sec-location">
      <div className="container narrow">
        <h2 className="font-display">LOCATION</h2>
        <div>
          <p>グリーンロードファーム<br />
          長野県松本市岡田下岡田1036</p>
          <p>
            アクセス：<br />
  【車でお越しの方】松本ICを降りて松本駅方面へ進み、「中央一丁目」を左折して直進（約20分）<br />
  【電車でお越しの方】JR松本駅から車で15分<br />
  ※公共交通機関がございませんので、お車、またはタクシーでお越しください。<br />
  ※駐車スペースから農園までは徒歩となります。初めてお越しの方はご案内しますので、事前にご連絡ください。</p>
        </div>
      </div>
    </LocationWrapper>

    <Social />

  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    about1: file(relativePath: { eq: "about_img_01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about2: file(relativePath: { eq: "about_img_02.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    about3: file(relativePath: { eq: "about_img_03.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fruitApricot: file(relativePath: { eq: "fruit_img_apricot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    fruitWasser: file(relativePath: { eq: "fruit_img_wasser.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`


// export const pageQuery = graphql`
//   query LocationQuery {
//     allLocationData {
//       edges {
//         node {
//           results {
//             geometry {
//               location_type
//               location {
//                 lat
//                 lng
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `