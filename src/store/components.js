import { app } from './app'
import { authentication } from './authentication'
import { dialogbox } from '@/components/Dialog/store/modules/dialogbox'
import { progressbar } from '@/components/Progressbar/store/modules/progressbar'
import { sidebar } from '@/components/Sidebar/store/modules/sidebar'

export const modules = {
  app,
  authentication,
  dialogbox,
  progressbar,
  sidebar,
}
