import { AppPage } from '../components'
import { DialogsDemo, GuidDemo, ToastsDemo } from '../components/demo'

export const DemoPage = () => (
  <AppPage title="Demo">
    <GuidDemo />
    <ToastsDemo />
    <DialogsDemo />
  </AppPage>
)
