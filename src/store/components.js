import { app } from './app'
import { authentication } from './authentication'
import { breadcrumbs } from '@/components/Breadcrumbs/store/modules/breadcrumbs'
import { dialogbox } from '@/components/Dialog/store/modules/dialogbox'
import { progressbar } from '@/components/Progressbar/store/modules/progressbar'
import { sidebar } from '@/components/Sidebar/store/modules/sidebar'
import { utilitybar } from '@/components/Utilitybar/store/modules/utilitybar'

export const modules = {
  app,
  authentication,
  breadcrumbs,
  dialogbox,
  progressbar,
  sidebar,
  utilitybar,
}
