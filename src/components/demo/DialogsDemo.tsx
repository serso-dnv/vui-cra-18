import { Box, Button, useDialog, useToast } from '@veracity/vui'

const message = 'Lorem impsum'

export const DialogsDemo = () => {
  const { showConfirm, showPrompt } = useDialog()
  const { showSuccess, showError, showLoading, showWarning } = useToast()

  return (
    <Box my={3}>
      <Button
        mr={2}
        onClick={() =>
          showConfirm(message, message).then(response => (response ? showSuccess('Confirmed') : showError('Rejected')))
        }
      >
        showConfirm
      </Button>
      <Button
        mr={2}
        onClick={() =>
          showPrompt(message, message).then(response => (response ? showSuccess(response) : showError('Rejected')))
        }
      >
        showPrompt
      </Button>
    </Box>
  )
}
