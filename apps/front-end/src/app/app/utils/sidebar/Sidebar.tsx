import { SidebarContainer } from './Sidebar.style'
import { SidebarContent } from './SidebarContent'
import { SidebarFooter } from './SidebarFooter'
import { SidebarHeader } from './SidebarHeader'

export function Sidebar() {
  return (
    <SidebarContainer>
      <SidebarHeader />

      <SidebarContent />

      <SidebarFooter />
    </SidebarContainer>
  )
}
