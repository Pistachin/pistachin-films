import React from 'react'
import styled from 'styled-components'

const About = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
  width: 50%;
  align-self: center;
`

class AboutText extends React.Component {
  render () {
    return(
	  <About className='about'>
        <h3>'Pistachin Films' is a one man army, or project, if you prefer. </h3>
	    <p>It is a long term film project that now is formed only by it's creator, Santiago 'Pistachin' Arcos. (Can you imagine where the name comes from?)</p>
        <p>The goal of this project is to become larger and eventually become a film producing company.</p>
        <p>Hence, this just my Bio. I'll write it as if it wasn't me speaking.</p>
        <p>Raised in Barcelona, at the age of 27 began studying 'Direction of Photography' at ECIB (Escola de Cinema de Barcelona). This allowed him to participate in many shootings, always involved in the photography department.</p>
        <p>And at the end of his studies Directed the Photography of a shortfilm.</p>
        <p>While learning he started a side project as writer called 'Service Not Included' (you can find more information about it here) that ended up Directing. This is a key moment in his career, since from that moment on beyond, his main goal is to be a Film Director.</p>
        <p>Even though, due to his personality, directing is not the only thing he thinks he should be doing, since there are many departments involved in the film making industry. There are projects as writer, Director of Photography and producer to come in the future.</p>
        <p>This way of thinking is what lead him to join an acting school, to improve his directing skills, and eventually, acting in some theatres and films (feature or short).</p>
	  </About>
	)
  }
}

export default AboutText