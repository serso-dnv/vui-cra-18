type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

const getAntiforgeryHeader = () => {
  const requestVerificationToken =
    document?.cookie
      ?.split('; ')
      ?.find(row => row.startsWith('RequestVerificationToken='))
      ?.split('=')[1] ?? ''

  return { RequestVerificationToken: requestVerificationToken }
}

const ajaxHeader = {
  'X-Requested-With': 'XMLHttpRequest'
}
const jsonContentType = 'application/json'
const jsonContentTypeHeader = {
  accept: jsonContentType,
  'content-type': jsonContentType,
  ...ajaxHeader
}

const fetchFactory = (method: HttpMethod) => {
  const getHeaders = ['POST', 'PUT', 'PATCH', 'DELETE'].find(x => x === method)
    ? (isFormData: boolean) =>
        isFormData
          ? { ...getAntiforgeryHeader(), ...ajaxHeader }
          : { ...getAntiforgeryHeader(), ...jsonContentTypeHeader }
    : (isFormData: boolean) => (isFormData ? ajaxHeader : jsonContentTypeHeader)

  return async function fetch<TInput = any | FormData, TOutput = any>(path: string, input?: TInput): Promise<TOutput> {
    const isFormData = input instanceof FormData
    const response = await window.fetch(path, {
      method,
      body: isFormData ? input : JSON.stringify(input),
      headers: getHeaders(isFormData)
    })

    const output = response.headers.get('content-type')?.includes(jsonContentType) ? await response.json() : undefined

    return response.ok
      ? output
      : Promise.reject({
          response: {
            status: response.status,
            data: output ?? (response.status === 401 ? undefined : await response.json())
          }
        })
  }
}

export const get: <TOutput = any>(path: string) => Promise<TOutput> = fetchFactory('GET')
export const post = fetchFactory('POST')
export const put = fetchFactory('PUT')
export const patch = fetchFactory('PATCH')
export const del: (path: string) => Promise<void> = fetchFactory('DELETE')
