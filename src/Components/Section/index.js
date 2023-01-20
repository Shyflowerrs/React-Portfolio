import React, { useState } from 'react'
import {MainSection, CardOne, CardParagraph, CardTwo} from './section.js'
import { useNavigate } from "react-router-dom"
import '../../CSS/index.css'
const Section = () => {
  return (
    <>
      <MainSection>
        <CardOne>
          <CardParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula lorem, placerat eget ante tincidunt,
            eleifend luctus turpis. Sed ultrices orci id tellus lacinia, nec sodales velit viverra.
            Vestibulum egestas justo non nulla pellentesque, eget vulputate ante blandit. Curabitur vitae mi non sem imperdiet efficitur
            sit amet malesuada lorem.
            Aenean suscipit felis sem, ac interdum nulla facilisis id. Fusce hendrerit velit nec tellus pellentesque,
            ac volutpat nibh luctus. Proin in efficitur massa. Nullam lorem elit, aliquam vitae sapien nec,
            convallis suscipit nisl. Nulla mauris ligula, hendrerit eu sapien non, pulvinar tincidunt lectus.
            Aliquam a ultricies massa, sed porta justo.
          </CardParagraph>
        </CardOne>

        <CardTwo>
          <CardParagraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula lorem, placerat eget ante tincidunt,
              eleifend luctus turpis. Sed ultrices orci id tellus lacinia, nec sodales velit viverra.
              Vestibulum egestas justo non nulla pellentesque, eget vulputate ante blandit. Curabitur vitae mi non sem imperdiet efficitur
              sit amet malesuada lorem.
              Aenean suscipit felis sem, ac interdum nulla facilisis id. Fusce hendrerit velit nec tellus pellentesque,
              ac volutpat nibh luctus. Proin in efficitur massa. Nullam lorem elit, aliquam vitae sapien nec,
              convallis suscipit nisl. Nulla mauris ligula, hendrerit eu sapien non, pulvinar tincidunt lectus.
              Aliquam a ultricies massa, sed porta justo.
            </CardParagraph>
        </CardTwo>
      </MainSection>
    </>
  )
}
export default Section