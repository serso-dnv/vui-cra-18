import { Box, Button, Modal, List, ListItem, showSuccess } from '@veracity/vui'
import { guid, useToggle, copyToClipboard } from '@veracity/ui-utils'

const App = () => {
  const [showModal, toggleModal] = useToggle(false)

  const copy = (text: string) =>
    copyToClipboard(text).then(() =>
      showSuccess(`Copied to the clipboard: ${text}`)
    )

  return (
    <Box p={4}>
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
          transform="translate(-50%, -50%)">
          <Box p={2}>
            <List>
              {Array(10)
                .fill('')
                .map(() => guid())
                .map(g => (
                  <ListItem key={g} justifyContent="space-between">
                    {g}
                    <Button
                      onClick={() => copy(g)}
                      icon="falCopy"
                      size="sm"
                      variant="text"
                    />
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

export default App

