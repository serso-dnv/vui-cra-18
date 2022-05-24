import { guid, useToggle } from '@veracity/ui-utils'
import { Box, Button, Dialog, Input, P, T, Table } from '@veracity/vui'
import { useEffect, useState } from 'react'

import { useProjectMutation, useProjects } from '../apiQueryHooks'
import { AppPage } from '../components'

export const ProjectsPage = () => {
  const { data: projects } = useProjects()
  const [isAddDialog, toggleIsAddDialog] = useToggle(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const postProject = useProjectMutation()

  useEffect(() => {
    setName('')
    setDescription('')
  }, [isAddDialog])

  const addProject = () => {
    postProject.mutate({ id: guid(), name, description })
    toggleIsAddDialog()
  }

  return (
    <AppPage
      actionsSlot={
        <Button iconLeft="culPlusThin" onClick={toggleIsAddDialog}>
          Add Project
        </Button>
      }
      title="Projects"
    >
      <Table
        columns={[
          {
            field: 'name',
            isSortable: true,
            title: 'Name'
          },
          {
            field: 'description',
            isSortable: false,
            title: 'Description'
          }
        ]}
        rows={projects}
      />
      <Dialog
        body={
          <Box display="block" px={3}>
            <T>Name</T>
            <Input mb={2} onChange={e => setName(e.target.value)} value={name} />
            <T>Description</T>
            <Input mb={4} onChange={e => setDescription(e.target.value)} value={description} />
          </Box>
        }
        cancelButton={{ text: 'Cancel' }}
        isOpen={isAddDialog}
        onClose={toggleIsAddDialog}
        submitButton={{ onClick: addProject, text: 'Add' }}
        title="Add Project"
      />
    </AppPage>
  )
}
