import { createAction } from 'redux-actions'
// Counter
export const LATEST_PHOTO = 'photos/latest photo'
export const PREVIOUS_PHOTO = 'photos/previous photo'
export const NEXT_PHOTO = 'photos/next photo'

export const latestPhoto = createAction(LATEST_PHOTO)
export const previousPhoto = createAction(PREVIOUS_PHOTO)
export const nextPhoto = createAction(NEXT_PHOTO)
