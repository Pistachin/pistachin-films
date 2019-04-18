import React from 'react'
import AboutText from './About'
import styled from 'styled-components'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  width: 30%;
`

class ContentContainer extends React.Component {
  render () {
    return(
      <Content>
        <p>The cake is a lie</p>
		<AboutText />
      </Content>
    )
  }
}

export default ContentContainer
