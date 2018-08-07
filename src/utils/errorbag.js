export const errorbag = (response, errors) => {
  switch (response.status) {
    case 422:
    case 403:
      for (let key in response.data) {
        errors.add(key, response.data[key].join('\n'), 'server')
      }
      break

    case 500:
      errors = 'An unhandled exception occured!'
      break

    default:
      errors = response.data
      break
  }
}
