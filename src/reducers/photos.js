import { PREVIOUS_PHOTO, NEXT_PHOTO, LATEST_PHOTO } from 'constants/ActionTypes'

import list from '../photos.json'

export function wrap(index, length) {
  if (index < 0) return index + length
  if (index >= length) return index - length
  return index
}

const initialState = {
  list,
  index: wrap(window.localStorage.index - 0, list.length)
}

export default function photosReducer(state = initialState, action) {
  switch (action.type) {
    case PREVIOUS_PHOTO: {
      const index = wrap(state.index - 1, state.list.length)
      window.localStorage.index = index
      return {
        ...state,
        index
      }
    }
    case NEXT_PHOTO: {
      const index = wrap(state.index + 1, state.list.length)
      window.localStorage.index = index
      return {
        ...state,
        index
      }
    }
    case LATEST_PHOTO: {
      const index = state.list.length - 1
      window.localStorage.index = index
      return {
        ...state,
        index
      }
    }
    default:
      return state
  }
}
