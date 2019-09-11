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
      width: 3800px;
      height: 3850px;
      top: 0;
      left: 50%;
      margin-left: -1500px;
      margin-top: -3660px;
      border-radius: 50%;
      animation: funcRotate 29s infinite linear;
    }
    .w-three {
      width: 3800px;
      height: 3850px;
      top: 0;
      left: 50%;
      margin-left: -2300px;
      margin-top: -3670px;
      border-radius: 50%;
      animation: funcRotate 32s infinite linear;
    }
    .w-right {
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
      <div className="waves w-one"></div>
      <div className="waves w-two"></div>
      <div className="waves w-three"></div>
      {/* <div className="waves w-right"></div> */}
    </div>
    <header style={{position:'relative',}}>
      <Nav className="nav-wrap" />
    </header>
  </HeaderWrapper>
)


export default Header
