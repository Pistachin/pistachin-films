import React from 'react'
import styled from 'styled-components'
import shortFilms from './../data/short-films'

const ProjectList = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 0 15px 0;
    width: 50%;
    align-self: center;

    @media only screen and (max-width: 600px) {
        width: 90%;
    }
`

class Projects extends React.Component {
  render () {
    return(
	  <ProjectList className='contact'>
        <h3>Short films</h3>
        {
            shortFilms.map(film => {
                if (film.url !== '#') {
                    // return <iframe src={film.url} width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                } else {
                    // return <h4>{film.name}</h4>
                }
                return <div className='film' className={film.name}>{film.name}</div>
            })
        }
	  </ProjectList>
	)
  }
}

export default Projects