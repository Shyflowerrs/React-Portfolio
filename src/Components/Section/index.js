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
    paddingLeft:"50px",
    borderRadius:" 50% 25%",
  };
  return (
    <>
      <div class="background-effect">
        <MainSection>
          <CardOne>
            <CardParagraph>
            <p> I am a graduate of Business Informaton Technology at Red River Polytechnic, in December 2022.
            In this program I learned alot! My passion for development grew. I have a love for puzzles and
            problem solving, which is what drew me to this career.</p>

            </CardParagraph>
            <CardParagraph>
            <p>  I'm interested in both software and website development. I currently am working as A
            Junior fullstack developer and I'm learning and improving alot!</p>
            </CardParagraph>
          </CardOne>

          <CardTwo>
            <CardParagraph>
              <img src={profile} style={photo}/>
              </CardParagraph>
          </CardTwo>
        </MainSection>
      </div>
    </>
  )
}
export default Section