import type { NextPage } from 'next'
import { Home, Skills, Contact, Projects } from 'components'
const HomePage: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <div className="mt-16" />
      <Home />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default HomePage
