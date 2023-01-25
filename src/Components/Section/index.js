import React, { useState } from 'react'
import {MainSection, CardOne, CardParagraph, CardTwo} from './section.js'
import '../../CSS/index.css'
import { borderRadius } from '@mui/system';
import { FormatLineSpacing } from '@mui/icons-material';


const Section = () => {
  const profile = require('../../assets/chelsea.jpg');
  const photo = {
    width:"400px",
    height:"400px",
    paddingLeft:"100px",
    borderRadius:" 55% 10%",
  };
  return (
    <>
      <MainSection>
        <CardOne>
          <CardParagraph>
          <p> I am a graduate of Business Informaton Technology at Red River Polytechnic, in December 2022.
           In this program I learned alot! My passion for development grew. I have a love for puzzles and
           problem solving,</p>

          </CardParagraph>
          <CardParagraph>
          <p> which is what drew me to this career. I'm interested in both software and website
           development.</p>
          </CardParagraph>
        </CardOne>

        <CardTwo>
          <CardParagraph>
             <img src={profile} style={photo}/>
            </CardParagraph>
        </CardTwo>
      </MainSection>
    </>
  )
}
export default Section