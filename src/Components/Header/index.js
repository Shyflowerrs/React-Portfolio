import React, { useState } from 'react'
import '../../CSS/index.css'
import {HeadSection, HeadParagraph} from './Header'
const BiggerBold = {
  fontSize: "40px",
  color: "#a7a2a9",
};
const head = {
  fontSize: "80px",
  color: "#FFF",
  lineHeight: "20px"
}
const Header = () => {
  return (
    <>
      <HeadSection>
        <HeadParagraph>
        <div class="text-box">
          <p><b>Hello, welcome to my site</b></p>
          <p><b style = {BiggerBold}> My name is</b></p>

            <span>C</span>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>S</span>
            <span>E</span>
            <span>A</span>
          </div>
        </HeadParagraph>
      </HeadSection>
    </>
  )
}

export default Header;