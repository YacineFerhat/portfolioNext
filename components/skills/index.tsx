import frontEnd from 'assets/icons/front-end.png'
import backEnd from 'assets/icons/backend.png'
import DevOps from 'assets/icons/devops.png'
import DB from 'assets/icons/server.png'
import Styling from 'assets/icons/color-palette.png'
import Mobile from 'assets/icons/smartphone.png'

export const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-4 text-center sm:px-8 md:grid-cols-2 md:px-16 lg:px-28 xl:px-64"
    >
      <div className="mt-12 text-2xl font-bold lg:text-3xl xl:text-4xl ">
        My skills{' '}
      </div>
      <div className="text-md mt-2 font-thin lg:text-lg xl:text-xl">
        I build your applications using this techs
      </div>
      <div className="mt-8 grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center">
          <img className="mb-2 w-24" src={frontEnd.src} />
          <h1 className="text-lg">Frontend</h1>{' '}
          <h2 className="text-sm font-light">ReactJs, NextJs, VueJs</h2>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="mb-2 w-24" src={backEnd.src} />
          <h1 className="text-lg">Backend</h1>{' '}
          <h2 className="text-sm font-light">NodeJs, NestJs, ExpressJs</h2>
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-4 md:mt-0">
          <img className="mb-2 w-24" src={DevOps.src} />
          <h1 className="text-lg">DevOps</h1>{' '}
          <h2 className="text-sm font-light">GCP, Nginx, CI/CD (Github)</h2>
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-4">
          <img className="mb-2 w-24" src={DB.src} />
          <h1 className="text-lg">Databse</h1>{' '}
          <h2 className="text-sm font-light">
            MongoDb, Cassandra, Redis, Firebase, Mysql
          </h2>
        </div>
        <div className=" flex flex-col items-center justify-center sm:mt-4 ">
          <img className="mb-2 w-24" src={Styling.src} />
          <h1 className="text-lg">Styling</h1>{' '}
          <h2 className="text-sm font-light">
            Tailwind, Bootstrap, Bulma, CSS
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center sm:mt-4">
          <img className="mb-2 w-24" src={Mobile.src} />
          <h1 className="text-lg">Mobile</h1>{' '}
          <h2 className="text-sm font-light">React Native</h2>
        </div>
      </div>
    </div>
  )
}
