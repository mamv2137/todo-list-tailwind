import { GET_FIELDS, CLEAN_FIELDS } from './types'

export const getFields = (filter, value, route) => {
  return {
    type: GET_FIELDS,
    payload: {
      filter,
      value,
      route
    }
  }
}

export const cleanFilter = () => {
  return {
    type: CLEAN_FIELDS,
  }
}
