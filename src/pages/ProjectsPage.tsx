import { guid, useToggle } from '@veracity/ui-utils'
import { Box, Button, Dialog, IconButton, Input, Spinner, T, Table, Tbody, Td, Thead, Tr } from '@veracity/vui'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCreateProjectMutation, useDeleteProjectMutation, useReadProjects } from '../apiQueryHooks'
import { AppPage } from '../components'
import { Project } from '../types'

export const ProjectsPage = () => {
  const { data: projects, isLoading } = useReadProjects()
  const [isAddDialog, toggleIsAddDialog] = useToggle(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const createProject = useCreateProjectMutation()
  const deleteProject = useDeleteProjectMutation()

  useEffect(() => {
    setName('')
    setDescription('')
  }, [isAddDialog])

  const onAddProject = () => {
    createProject.mutate({ id: guid(), name, description })
    toggleIsAddDialog()
  }

  const onDeleteProject = (id: string) => deleteProject.mutate(id)

  return (
    <AppPage
      actionsSlot={
        <Button
          disabled={isLoading || createProject.isLoading || deleteProject.isLoading}
          iconLeft="culPlusThin"
          isLoading={createProject.isLoading}
          onClick={toggleIsAddDialog}
        >
          Add Project
        </Button>
      }
      title="Projects"
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Table
          columns={[
            {
              field: 'name',
              isSortable: false,
              title: 'Name'
            },
            {
              field: 'description',
              isSortable: false,
              title: 'Description'
            },
            {
              field: '',
              isSortable: false,
              title: 'Actions'
            }
          ]}
        >
          <Thead />
          <Tbody>
            {projects?.map((project: Project) => (
              <Tr key={project.id}>
                <Td>
                  <Link to={project.id}>{project.name}</Link>
                </Td>
                <Td>{project.description}</Td>
                <Td w={80}>
                  <Box gap={1}>
                    <Link to={project.id}>
                      <IconButton icon="falPen" size="sm" />
                    </Link>

                    <IconButton
                      colorScheme="red"
                      icon="falTrashAlt"
                      onClick={() => onDeleteProject(project.id)}
                      size="sm"
                    />
                  </Box>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}

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
        submitButton={{ onClick: onAddProject, text: 'Add' }}
        title="Add Project"
      />
    </AppPage>
  )
}
