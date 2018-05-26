import React from 'react'
import PropTypes from 'prop-types'
import pure from 'recompose/pure'
import styled from 'styled-components'

const Photo = styled.img`width:100%;height:100%;`
const LeftScreen = styled.button`position:absolute;left:0;top:0;width:50%;height:100%;opacity:0;`
const RightScreen = styled.button`position:absolute;right:0;top:0;width:50%;height:100%;opacity:0;`

function PhotoDisplay({ photo, previousPhoto, nextPhoto }) {
  return (
    <section>
      <Photo src={`photos/${photo}`} />
      <LeftScreen onClick={previousPhoto} />
      <RightScreen onClick={nextPhoto} />
    </section>
  )
}

PhotoDisplay.propTypes = {
  photo: PropTypes.string.isRequired,
  previousPhoto: PropTypes.func.isRequired,
  nextPhoto: PropTypes.func.isRequired
}

export default pure(PhotoDisplay)
