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
    top: 0;
    z-index: -1;
    .waves {
      position: absolute;
      background: rgba(120, 255, 255, .75);
      z-index: -1;
    }
    .w-one {
      width: 5800px;
      height: 5800px;
      top: 0;
      left: 50%;
      margin-left: -2950px;
      margin-top: -5650px;
      border-radius: 49%;
      animation: funcRotate 28s infinite linear;
    }
    .w-two {
      width: 2800px;
      height: 2800px;
      top: 0;
      left: 50%;
      margin-left: -1300px;
      margin-top: -2650px;
      border-radius: 48%;
      opacity: .5;
      animation: funcRotate 35s infinite linear;
    }
    .w-left {
      opacity: .5;
      width: 100%;
      height: 160px;
      top: 0;
      left: -400px;
      border-radius: 50%;
    }
    .w-right {
      opacity: .5;
      width: 100%;
      height: 160px;
      top: 0;
      right: -300px;
      border-radius: 50%;
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
  @media (min-width: 750px) {
  }
`;

const Header = () => (
  <HeaderWrapper>
    <div className="wave-wrap">
      <div className="waves w-left"></div>
      <div className="waves w-right"></div>
      <div className="waves w-one"></div>
      {/* <div className="waves w-two"></div> */}
    </div>
    <header>
      <Nav className="nav-wrap" />
    </header>
  </HeaderWrapper>
)


export default Header
