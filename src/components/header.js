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
      background: rgba(255, 255, 255, 1);
    }
  }
  @media (min-width: 751px) {
    .wave-wrap {
      opacity: 0.8;
      .w-left {
        width: 3800px;
        height: 3850px;
        top: 0;
        left: 50%;
        margin-left: -2300px;
        margin-top: -3660px;
        border-radius: 50%;
        animation: funcRotate 8s infinite linear;
      }
      .w-center {
        width: 4800px;
        height: 4830px;
        top: 0;
        left: 50%;
        margin-left: -2460px;
        margin-top: -4640px;
        border-radius: 50%;
        animation: funcRotate 10s infinite linear;
      }
      .w-right {
        width: 5800px;
        height: 5820px;
        top: 0;
        left: 50%;
        margin-left: -2580px;
        margin-top: -5630px;
        border-radius: 50%;
        animation: funcRotate 8s infinite linear;
      }
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
  @media (max-width: 750px) {
    .w-left {
      opacity: 0.8;
      width: 1800px;
      height: 1810px;
      top: 0;
      left: 50%;
      margin-left: -1000px;
      margin-top: -1630px;
      border-radius: 50%;
    }
    .w-center {
      opacity: 0.8;
      width: 1800px;
      height: 1810px;
      top: 0;
      left: 50%;
      margin-left: -870px;
      margin-top: -1620px;
      border-radius: 50%;
    }
    .w-right {
      opacity: 0.8;
      width: 1800px;
      height: 1810px;
      top: 0;
      left: 50%;
      margin-left: -780px;
      margin-top: -1625px;
      border-radius: 50%;
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
