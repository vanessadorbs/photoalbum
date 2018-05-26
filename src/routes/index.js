import React from 'react'
import { PhotosContainer } from 'containers'
// import { Header } from 'components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`text-align: center;`

function Routes() {
  return (
    <Router>
      <Container>
        <Route path="/" component={PhotosContainer} />
      </Container>
    </Router>
  )
}

export default Routes
