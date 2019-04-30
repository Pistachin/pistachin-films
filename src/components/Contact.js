import React from 'react'
import styled from 'styled-components'

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
  width: 50%;
  align-self: center;
`

class ContactForm extends React.Component {
  render () {
    return(
	  <Contact className='contact'>
        <h3>Here I'll put a contact form </h3>
	  </Contact>
	)
  }
}

export default ContactForm