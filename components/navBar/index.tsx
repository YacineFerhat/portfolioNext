import { useRouter } from 'next/router'
import Link from 'next/link'
export const NavBar = () => {
  const { push } = useRouter()
  const handleClick = (click: string) => {
    push(click)
  }
  return (
    <nav className="sticky z-10 bg-white mb-4 top-0  flex items-center justify-between px-4 py-2 sm:px-8 md:px-32 lg:px-44 xl:px-64">
      <div className="cursor-pointer text-lg font-semibold tracking-widest">
        Yacine Dev
      </div>
      <div className="flex items-center font-semibold text-c-dark">
        <Link href="#skills">
          <a className="text-md cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue">
            My skills
          </a>
        </Link>
        <Link href="#projects">
          <a className="text-md mx-8 cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue">
            My projects
          </a>
        </Link>
        <Link href="#contact">
          <a className="text-md cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue">
            Contact
          </a>
        </Link>
      </div>
    </nav>
  )
}
