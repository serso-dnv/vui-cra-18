import { AppPage } from '../components'
import { DialogsDemo, GuidDemo, ToastsDemo, TooltipsDemo } from '../components/demo'

export const DemoPage = () => (
  <AppPage title="Demo">
    <GuidDemo />
    <ToastsDemo />
    <DialogsDemo />
    <TooltipsDemo />
  </AppPage>
)
