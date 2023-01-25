import { textAlign } from '@mui/system';
import React, { useState } from 'react'
import '../../CSS/index.css'
import {HeadSection, HeadParagraph} from './Header'

const SmallerBold = {
  fontSize: "30px",
  color: "#0f7173",
  lineHeight:"30px",
  textAlign: "center"
};
const BiggerBold = {
  fontSize: "30px",
  color: "#a7a2a9",
  lineHeight:"30px"
};

const Header = () => {
  return (
    <>
      <HeadSection>
        <HeadParagraph>
        <div class="text-box">
          <p><b style = {BiggerBold}>Hello, welcome to my website 😊</b> </p>
          <p><b style = {SmallerBold}> My name is </b></p>

            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>S</span>
            <span>E</span>
            <span>A</span>
            <span>.</span>

          </div>
        </HeadParagraph>
      </HeadSection>
    </>
  )
}

export default Header;