import { AppPage } from '../components'
import { DialogsDemo, GuidDemo, MessagesDemo, TableDemo, ToastsDemo, TooltipsDemo, UtilsDemo } from '../components/demo'

export const DemoPage = () => (
  <AppPage title="Demo">
    <GuidDemo />
    <ToastsDemo />
    <DialogsDemo />
    <TooltipsDemo />
    <MessagesDemo />
    <UtilsDemo />
    <TableDemo />
  </AppPage>
)
