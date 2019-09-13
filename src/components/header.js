import PropTypes from "prop-types"
import React from "react"
import Nav from "../components/nav"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  .wave-wrap {
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 100%;
    top: -10%;
    .waves {
      position: absolute;
      background: rgba(255, 255, 255, 0.85);
    }
    @keyframes funcRotate {
      from { 
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  }
  @media (mix-width: 751px) {
    .w-center {
      width: 5800px;
      height: 5820px;
      top: 0;
      left: 50%;
      margin-left: -2950px;
      margin-top: -5620px;
      border-radius: 50%;
      animation: funcRotate 28s infinite linear;
    }
    .w-right {
      width: 5800px;
      height: 5820px;
      top: 0;
      left: 50%;
      margin-left: -2580px;
      margin-top: -5620px;
      border-radius: 50%;
      animation: funcRotate 29s infinite linear;
    }
    .w-left {
      width: 3800px;
      height: 3850px;
      top: 0;
      left: 50%;
      margin-left: -2300px;
      margin-top: -3640px;
      border-radius: 50%;
      animation: funcRotate 32s infinite linear;
    }
  }
  @media (max-width: 750px) {
    .w-center {
      width: 2800px;
      height: 2820px;
      top: 0;
      left: 50%;
      margin-left: -1650px;
      margin-top: -2620px;
      border-radius: 50%;
      animation: funcRotate 28s infinite linear;
    }
    .w-right {
      width: 2800px;
      height: 2820px;
      top: 0;
      left: 50%;
      margin-left: -1280px;
      margin-top: -2620px;
      border-radius: 50%;
      animation: funcRotate 29s infinite linear;
    }
    .w-left {
      width: 1800px;
      height: 1850px;
      top: 0;
      left: 50%;
      margin-left: -800px;
      margin-top: -1640px;
      border-radius: 50%;
      animation: funcRotate 32s infinite linear;
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div className="wave-wrap">
      <div className="waves w-center"></div>
      <div className="waves w-right"></div>
      <div className="waves w-left"></div>
      {/* <div className="waves w-right"></div> */}
    </div>
    <header style={{position:'relative',}}>
      <Nav className="nav-wrap" />
    </header>
  </HeaderWrapper>
)


export default Header
