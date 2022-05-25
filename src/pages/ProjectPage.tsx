import { Box, P, Spinner } from '@veracity/vui'
import { useParams } from 'react-router-dom'

import { useReadProject } from '../apiQueryHooks'
import { AppPage } from '../components'

export const ProjectPage = () => {
  const { id } = useParams()
  const { data: project, isLoading } = useReadProject(`${id}`)
  return (
    <AppPage title={project?.name}>
      {isLoading && <Spinner />}
      {!!project?.description && (
        <Box>
          <P fontWeight="500">{project.description}</P>
        </Box>
      )}
      {project?.id && (
        <Box mt={2}>
          <P>Project page content.</P>
        </Box>
      )}
    </AppPage>
  )
}
