import { cookieGet, cookieSet, guid } from '@veracity/ui-utils'
import { Box, Button, useToast } from '@veracity/vui'

const id = guid()

export const UtilsDemo = () => {
  const { showInfo, showSuccess, showError } = useToast()

  const onSetCookie = (maxAge?: number) => {
    try {
      cookieSet(`key-${id}`, `value-${id}`, maxAge)
      showSuccess(`Set cookie: key-${id}`)
    } catch (error) {
      showError('An error')
    }
  }
  const onGetCookie = () => {
    showInfo(cookieGet(`key-${id}`))
  }

  return (
    <Box my={3}>
      <Button mr={2} onClick={() => onSetCookie(30)}>
        Set random one-month cookie
      </Button>
      <Button mr={2} onClick={() => onSetCookie()}>
        Set random session cookie
      </Button>
      <Button mr={2} onClick={onGetCookie}>
        getRandomCookie
      </Button>
    </Box>
  )
}
