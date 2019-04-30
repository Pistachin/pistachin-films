import React from 'react'
import AboutText from './About'
import ContactForm from './Contact'
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
`

const ProtoContentContainer = ({ visibleContent, contentType }) => {
    let result = ''
    switch (contentType) {
        case 'about':
            result = <AboutText />
            break;
        case 'contact':
            result = <ContactForm />
            break;
        default:
            result = <span></span>
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
