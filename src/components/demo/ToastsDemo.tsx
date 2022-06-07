import { Box, Button, useToast } from '@veracity/vui'

const message = 'Lorem impsum'

export const ToastsDemo = () => {
  const { showSuccess, showError, showLoading, showWarning } = useToast()

  return (
    <Box my={3}>
      <Button colorScheme="green" mr={2} onClick={() => showSuccess(message)}>
        showSuccess
      </Button>
      <Button colorScheme="red" mr={2} onClick={() => showError(message)}>
        showError
      </Button>
      <Button colorScheme="blue" mr={2} onClick={() => showLoading(message)}>
        showLoading
      </Button>
      <Button colorScheme={'yellow' as 'green'} mr={2} onClick={() => showWarning(message)}>
        showWarning
      </Button>
    </Box>
  )
}
