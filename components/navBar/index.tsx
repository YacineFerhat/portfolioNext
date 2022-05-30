import { useRouter } from 'next/router'
import Link from 'next/link'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'

export const NavBar = () => {
  const { push } = useRouter()
  const handleClick = (click: string) => {
    push(click)
  }
  return (
    <nav className="sticky top-0 z-10 mb-4 flex  items-center justify-between bg-white px-4 py-2 sm:px-8 md:px-32 lg:px-44 xl:px-64">
      <div className="cursor-pointer text-lg font-semibold tracking-widest">
        Yacine Dev
      </div>
      <div className="  items-center font-semibold text-c-dark sm:flex">
        <Link href="#skills">
          <a className=" text-md hidden cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue sm:flex">
            My skills
          </a>
        </Link>
        <Link href="#projects">
          <a className="text-md mx-8  hidden cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue sm:flex">
            My projects
          </a>
        </Link>
        <Link href="#contact">
          <a className="text-md hidden  cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue sm:flex">
            Contact
          </a>
        </Link>

        <Link href="https://github.com/YacineFerhat">
          <a className="text-md mx-8 cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue">
            <GitHubIcon />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/yacineferhat/">
          <a className="text-md cursor-pointer font-semibold tracking-widest duration-500 hover:font-extrabold hover:text-c-blue">
            <LinkedInIcon />
          </a>
        </Link>
      </div>
    </nav>
  )
}
