import { copyToClipboard, guid, useToggle } from '@veracity/ui-utils'
import { Box, Button, List, ListItem, Modal, useToast } from '@veracity/vui'
import { useEffect, useReducer } from 'react'

export const GuidDemo = () => {
  const [showModal, toggleModal] = useToggle(false)
  const { showSuccess } = useToast()

  const [guids, dispatch] = useReducer((guids: string[], action: string[]) => action, [] as string[])

  useEffect(() => {
    dispatch(
      Array(12)
        .fill('')
        .map(() => guid())
    )
  }, [])

  const copy = (text: string) => copyToClipboard(text).then(() => showSuccess(`Copied to the clipboard: ${text}`))

  return (
    <Box my={3}>
      <Button onClick={toggleModal}>Generate GUIDs</Button>
      <Modal disableBackdropClose isOpen={showModal} onClose={toggleModal}>
        <Box
          bg="white"
          borderRadius="md"
          boxShadow="2"
          centerH
          column
          left="50%"
          outline="none"
          p={2}
          position="absolute"
          top="50%"
          transform="translate(-50%, -50%)"
        >
          <Box p={2}>
            <List>
              {guids?.map(g => (
                <ListItem justifyContent="space-between" key={g}>
                  {g}
                  <Button icon="falCopy" onClick={() => copy(g)} size="sm" variant="text" />
                </ListItem>
              ))}
            </List>
          </Box>
          <Button onClick={toggleModal}>OK</Button>
        </Box>
      </Modal>
    </Box>
  )
}
