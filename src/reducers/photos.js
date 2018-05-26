import { PREVIOUS_PHOTO, NEXT_PHOTO, LATEST_PHOTO } from 'constants/ActionTypes'

import list from '../photos.json'

const initialState = {
  list,
  index: 0
}

export function wrap(index, length) {
  if (index < 0) return index + length
  if (index >= length) return index - length
  return index
}

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case PREVIOUS_PHOTO:
      return {
        ...state,
        index: wrap(state.index - 1, state.list.length)
      }
    case NEXT_PHOTO:
      return {
        ...state,
        index: wrap(state.index + 1, state.list.length)
      }
    case LATEST_PHOTO:
      return {
        ...state,
        index: state.list.length - 1
      }
    default:
      return state
  }
}
