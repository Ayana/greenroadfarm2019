import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"
import Background from "../images/t_visual_img02.jpg"
import SEO from "../components/seo"
import styled from "styled-components"

const AboutWrapper = styled.div`
  padding: 3em 0;
  .about-item {
    padding: 3em 0 0;
  }
 @media (min-width: 750px) {
  }
`;

const FruitWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  .fruit-wave {
    background-color: #E7E8E3;
    border-top-right-radius: 1000px 80px;
    border-top-left-radius: 1000px 80px;
    border-bottom: 15px solid rgba(255, 255, 255, 0.31);
    margin-left: -100px;
    margin-right: -100px;
    padding-left: 100px;
    padding-right: 100px;
    padding: 3em 0;
  }
  .fruit-item {
    padding: 3em 0 0;
  }
  @media (min-width: 750px) {
  }
`;

const LocationWrapper = styled.div`
  padding: 3em 0;
  @media (min-width: 750px) {
  }
`;

const VisualWrapper = styled.div`
  width: 100%;
  height: 600px;
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
    opacity:0
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


const IndexPage = () => (
  <Layout>
    <SEO title="グリーンロードファーム" />
    <VisualWrapper>
      <div className="visual-wrap">
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto',
          paddingTop: '70px',
          textAlign: 'center',
        }} 
      >
      <p className="font-script"　style={{fontSize: '2.8rem',marginBottom: '0.8em',}}>
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
      <p className="fade-in caption" style={{fontSize: '1.05rem',fontWeight: 'bold',}}>旬の味と自然を満喫できる信州・松本のフルーツ農園です</p>
      </div>
      </div>
    </VisualWrapper>

    <AboutWrapper id="about" className="sec-about">
      <div className="container narrow">
        <h2 className="font-display">ABOUT</h2>
        <p className="lead narrow">GreanRoadFarm（グリーンロードファーム）は、長野県松本市の里山にあるフルーツ農園です。<br />
  あんずやワッサーなどの果樹を植えることで、荒廃した農地を活用し、旬の味や豊かな自然を楽しめる地域づくりを目指しています。</p>
        <div className="about-item">
          <h3>荒廃した土地を活用したフルーツ農園です</h3>
          <div>
            <p>グリーンロードファームの農園は、利用されなくなり荒廃し始めた土地を活用しています。そのため、当農園をご利用・ご来園いただくことが、耕作放棄地活用・持続可能な地域づくりへの協力となります。</p>
            <p>当農園は、グリーンロードファーム会員とオーナー会員によって運営されています。会員が、草刈り・剪定・摘果・消毒等の管理することで、収穫シーズンには旬のフルーツを楽しんでいただくことができます。</p>
          </div>
        </div>
        <div className="about-item">
          <h3>長野県だからこそ味わえるフルーツです</h3>
          <div>
            <p>グリーンロードファームで現在栽培しているフルーツは、長野県での生産量が日本一の杏（あんず）、長野県生まれのワッサーの2種類です。</p>
            <p>どちらも長野県では身近ですが、市場に出回る量が少ないフルーツです。そんなフルーツを、旬の一番おいしい時期に食べる生あんず、生ワッサーは、生産地だからこそ味わえる贅沢です。</p>
            <p>今後、多くの実ができる収穫シーズンには数量限定にて販売も行う予定です。ぜひ、会員のみなさんは旬の時期にご来園のうえ、生フルーツを味わってみてください。</p>
          </div>
        </div>
        <div className="about-item">
          <h3>自然豊かな信州の里山です</h3>
          <div>
            <p>グリーンロードファームがある長野県松本市は、昼と夜の寒暖の差が大きく、さらに農園がある里山は南向きで粘土質。この環境が果樹栽培に非常に適しています。また、自然豊かでアルプスの山々が見ることができる農園からの景色は非常に気持ちのよいものです。</p>
            <p>ご来園の際は、フルーツだけでなく、豊かな自然と美しい景色をお楽しみください。</p>
          </div>
        </div>
      </div>
    </AboutWrapper>

    <FruitWrapper id="fruit" className="sec-fruit">
      <div className="fruit-wave">
      <div className="container narrow">
        <h2 className="font-display">OUR FRUITS</h2>
        <p className="lead narrow">グリーンロードファームで栽培しているフルーツは、あんずとワッサーの2種類。<br />
  どちらも抜群のおいしさですが手に入れにくいフルーツ。ぜひ生の味をお楽しみください。</p>
        <div className="fruit-item">
          {/* <Images /> */}
          <h3>あんず / Apricot</h3>
          <div>
            <h4>穫れたてを生で食べるのが最高の贅沢</h4>
            <p>あんずは収穫時期が短く、痛みが早いため、生あんずは市場にあまり多くは出回りません。そのため、生で食べたことがない人も多いはず。</p>
            <p>収穫したての生あんずのおいしさは格別です。生の味わいを堪能した、さらに、ジャムやお菓子、お酒として味わえる、一度に二度も三度も楽しめます。</p>
            <p>グリーンロードファームでは、あんずの中でも大きく甘味が強い品種を選んで栽培しています</p>
          </div>
        </div>
        <div className="fruit-item">
          {/* <Images /> */}
          <h3>ワッサー / Wasser</h3>
          <div>
            <h4>地元ファン多し！信州生まれの絶品フルーツ</h4>
            <p>ワッサーは、桃×ネクタリンを掛け合わせた長野県生まれのフルーツ。長野県での知名度は高いのですが、県外ではまだまだ出荷量が少ない、おすすめ新フルーツです。</p>
            <p>桃の甘味とネクタリンの酸味がちょうどよーく混ざった絶妙なバランスと、とろける食感で、口の中においしさが広がります。ぜひこの新しい味わいを体験してみてください。</p>
          </div>
        </div>
      </div>
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
  </Layout>
)

export default IndexPage
