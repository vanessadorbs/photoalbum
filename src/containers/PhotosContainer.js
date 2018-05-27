// import React from 'react'
// import PropTypes from 'prop-types'
import { PhotoDisplay } from 'components'
import { createStructuredSelector, createSelector } from 'reselect'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as PhotoActions from 'actions/photos'

// class PhotosContainer extends React.Component {
//   static propTypes = {
//     photo: PropTypes.string.isRequired
//   }
//   render() {
//     const { photo, previousPhoto, nextPhoto } = this.props
//     return (
//       <PhotoDisplay
//         photo={this.props.photo}
//       />
//     )
//   }
// }

const mapStateToProps = createStructuredSelector({
  photo: createSelector(
    state => state.photos.list[state.photos.index],
    state => state
  ),
})
function mapDispatchToProps(dispatch) {
  return bindActionCreators(PhotoActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoDisplay)
