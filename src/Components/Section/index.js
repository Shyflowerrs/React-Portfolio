import React, { useState } from 'react'

import '../../CSS/index.css'
import { borderRadius, Container } from '@mui/system';
import { FormatLineSpacing } from '@mui/icons-material';


const Section = () => {
  const profile = require('../../assets/chelsea.jpg');
  const photo = {
    width:"400px",
    height:"400px",
    paddingLeft:"50px",
    borderRadius:" 50% 25%",
  };
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
  return (
    <>

<Container class="flex-wrap max-w-lg mx-auto">
<p><b style={SmallerBold}>Hello, welcome to my website 😊</b> </p>
          <p><b style={BiggerBold}> My name is </b></p>
</Container>
<Container class="flex-wrap text-8xl sm:text-9xl max-w-lg mx-auto">
          <span class="text-6xl sm:text-9xl">C</span>
            <span>H</span>
            <span>E</span>
            <span>L</span>
            <span>S</span>
            <span>E</span>
            <span>A</span>
            <span>.</span>
</Container>
<Container class="flex-wrap  max-w-3xl mx-auto ">
  <img class="w-64  md:h-full  float-right rounded-full"
        src={profile} alt="Linkedin profile" />
 <p class="text-sm">I am a Junior Developer living in <b>Winnipeg Manitoba</b>! I created this site to have a place to showcase my work, and to continue learning.
 I like to consider myself very <b>passionate</b> and driven. I also enjoy learning new things. I graduated in December of 2022 with a Business Information Technology diploma.
 I learned alot during school, - Web development, Data Structures and Algorithims, Software development and design patterns being my biggest interests.

  This site is created with React and Tailwind-CSS.
  </p>
</Container>



 {/* <div class=" max-w-md mx-auto rounded-xl  overflow-hidden md:max-w-2xl">

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
  <div class="md:flex">
    <div class="md:shrink-0">

      <img class="h-48 w-full object-cover md:h-full md:w-48"
      src={profile} alt="Modern building architecture" />
    </div>
    <div class="p-9">
      <div class="uppercase tracking-wide text-3xl text-indigo-500 font-semibold">
        Company retreats
      </div>
      <a href="#" class=" block mt-1 text-2xl leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="text-2xl mt-2 text-white-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
    </div>
  </div> */}


    </>
  )
}
export default Section