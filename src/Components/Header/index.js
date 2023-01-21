import React, { useState } from 'react'
import '../../CSS/index.css'
import {HeadSection, HeadParagraph} from './Header'
const BiggerBold = {
  fontSize: "50px",
  paddingTop: "100px",
  color: "#a7a2a9"
};
const Header = () => {
  return (
    <>
      <HeadSection>
        <HeadParagraph>
          <p><b>Hello, welcome to my site</b></p>
          <b style={BiggerBold}> My name is</b>
          <h1>Chelsea Hudak</h1>
        </HeadParagraph>
      </HeadSection>
    </>
  )
}

export default Header;