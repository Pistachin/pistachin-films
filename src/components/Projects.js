import React from 'react'
import styled from 'styled-components'

const ProjectList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 15px 0;
  width: 50%;
  align-self: center;
`

class Projects extends React.Component {
  render () {
    return(
	  <ProjectList className='contact'>
        <h3>Look, all my shortfilms!</h3>
	  </ProjectList>
	)
  }
}

export default Projects