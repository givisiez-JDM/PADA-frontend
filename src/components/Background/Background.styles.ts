import styled from "styled-components";
import baseImg from "./back-base.png"
import topImg from "./back-top.png"

export const BackgroundContainer = styled.div`
  position: fixed !important; 
  left: 0 !important;
  bottom: 0 !important;
  width: calc(100% + 1vh);
  height:33vh !important;
  z-index: 0; 
  background-image: url(${baseImg}) !important;
  background-size: cover !important;
  background-position: top !important;
  overflow: hidden !important;

  @media screen and (max-width: 768px) {
    height: 1vh;
    width: 100%;
  }
  
  @media screen and (max-width: 480px) {
    height: 1vh;
    width: 100%;
  }
`;

export const BackgroundTopContainer = styled.div`
  position: fixed !important;
  top: 0 !important;
  left: 0 !important;
  width: calc(100% + 1vh) !important;
  height: 33vh !important;
  z-index: 0;
  background-image: url(${topImg}) !important;
  background-size: cover !important;
  background-position: bottom !important;
  overflow: hidden !important;

  @media screen and (max-width: 768px) {
    height: 5vh;
    width: 100%;
  }
  
  @media screen and (max-width: 480px) {
    height: 5vh;
    width: 100%;
  }
`;