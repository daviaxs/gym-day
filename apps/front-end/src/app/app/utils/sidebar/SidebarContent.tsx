import { SidebarContentStyle } from './Sidebar.style'
import { NavButton } from './utils/navButton/NavButton'
import { NavLinks } from './utils/navLinks'

export function SidebarContent() {
  return (
    <SidebarContentStyle>
      {NavLinks.map((link, index) => (
        <NavButton key={index} to={link.to} iconName={link.icon}>
          {link.children}
        </NavButton>
      ))}
    </SidebarContentStyle>
  )
}
