import { app } from './app'
import { authentication } from './authentication'
import { breadcrumbs } from '@/components/Breadcrumbs/store/modules/breadcrumbs'
import { category } from '@/components/Category/store/modules/category'
import { dataiterator } from '@/components/DataIterator/store/modules/dataiterator'
import { datatable } from '@/components/DataTable/store/modules/datatable'
import { dialogbox } from '@/components/Dialog/store/modules/dialogbox'
import { iconmenu } from '@/components/IconMenu/store/modules/iconmenu'
import { progressbar } from '@/components/Progressbar/store/modules/progressbar'
import { sidebar } from '@/components/Sidebar/store/modules/sidebar'
import { tag } from '@/components/Tag/store/modules/tag'
import { timeline } from '@/components/Timeline/store/modules/timeline'
import { toolbar } from '@/components/Toolbar/store/modules/toolbar'
import { utilitybar } from '@/components/Utilitybar/store/modules/utilitybar'

export const modules = {
  app,
  authentication,
  breadcrumbs,
  category,
  dataiterator,
  datatable,
  dialogbox,
  iconmenu,
  progressbar,
  sidebar,
  tag,
  timeline,
  toolbar,
  utilitybar,
}
