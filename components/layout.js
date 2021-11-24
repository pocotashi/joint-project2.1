
import { Navbar } from './Navbar'

export const siteTitle = 'A&T inc'
export const aboutTitle = "About US"
export const serviceTitle = "Services"
export const contactTitle = "Contact US"
export const workTitle = "Our Work"
export const blogTitle = "blog"

export default function Layout({ children, home }) {
  return (
    <div>
      <Navbar/>
      <div>
      <header>
      </header>
      <main>{children}</main>
      </div>
    </div>
  )
}