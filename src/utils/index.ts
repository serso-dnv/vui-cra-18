export const isLocalhost = () => window.location.hostname === 'localhost'

export const isLoading = (statusName: string) => statusName === 'loading'
export const isError = (statusName: string) => statusName === 'error'
export const isSuccess = (statusName: string) => statusName === 'success'

export const timeMinutes = (minutes: number) => minutes * 60 * 1000
