import { axiosInstance, INTERNAL_SERVER_ERROR, API_KEY } from '..'

const handlesSuccessfulResponse = response => {
  return response
}

const itHasAResponse = error => {
  return error.response !== undefined
}

const handlesError = error => {
  if (itHasAResponse(error)) {
    if (error.response.status === SERVICE_UNAVAILABLE_STATUS) {
      return Promise.reject(SERVICE_UNAVAILABLE_MESSAGE)
    }
  }
  return Promise.reject(INTERNAL_SERVER_ERROR)
}

export const getCastingMovie = id => {
    return axiosInstance
      .get(`/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=credits`)
      .then(response => handlesSuccessfulResponse(response))
      .catch(error => handlesError(error))
  }
