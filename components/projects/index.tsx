import { ProjectCard } from 'components/projectCard'
import { projects } from 'data/index'
export const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full px-4 text-center sm:px-8 md:grid-cols-2 md:px-16 lg:px-28 xl:px-64"
    >
      <div className="mt-12 text-2xl font-bold lg:text-3xl xl:text-4xl ">
        My projects{' '}
      </div>
      <div className="text-md mt-2 font-thin lg:text-lg xl:text-xl">
        I had the chance to build some awesome projects !
      </div>
      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard data={project} key={project.title} />
        ))}
      </div>
    </div>
  )
}
