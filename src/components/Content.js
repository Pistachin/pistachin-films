import React from 'react'
import AboutText from './About'
import ContactForm from './Contact'
import Projects from './Projects'
import styled from 'styled-components'
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return {
        visibleContent: state.visibleContent,
        contentType: state.contentType
    }
}

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: scroll;

    @media only screen and (min-width: 900px) {
        overflow-y: visible;
    }
`

const ProtoContentContainer = ({ visibleContent, contentType }) => {
    let social = contentType.charAt(0).toUpperCase() + contentType.slice(1)
    let result = ''
    switch (contentType) {
        case 'about':
            result = <AboutText />
            break;
        case 'contact':
            result = <ContactForm />
            break;
        case 'projects':
            result = <Projects />
            break;
        default:
            result = <h4>You should be redirected to our {social} page</h4>
    }
    return (
        visibleContent ?  (
            <Content>
            {result}
            </Content>
        ) : <Content />)
}

const ContentContainer = connect(mapStateToProps)(ProtoContentContainer)

export default ContentContainer
