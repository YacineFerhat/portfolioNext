import svg from 'assets/svg.png'
import { Button, IconsHolder } from 'components'
export const Home = () => {
  return (
    <div className="grid grid-cols-1 gap-8 px-4 py-2 sm:px-8 md:grid-cols-2 md:px-16 lg:px-28 xl:px-64 ">
      <div className="flex flex-col items-center justify-center ">
        <div className="text-2xl font-bold lg:text-3xl xl:text-4xl ">
          An application that lives up to your ambitions, dreams and
          requirements
        </div>
        <div className="text-md mt-4 font-thin lg:text-lg xl:text-xl">
          entrust your project to a knowledgeable and efficient developer
        </div>
        <div className="mt-12 flex items-center justify-between">
          <Button className="cursor-pointer rounded-3xl bg-c-action p-4 text-lg font-bold text-white lg:text-xl xl:text-2xl">
            Services
          </Button>
          <Button className="ml-12 cursor-pointer rounded-3xl bg-c-blue p-4 text-lg font-bold text-white lg:text-xl xl:text-2xl">
            <a href={`tel:+213699377273`}>Contact me</a>
          </Button>
        </div>
      </div>
      <div className="relative mt-20 md:mt-0">
        <IconsHolder />
        <img src={svg.src} />
      </div>
    </div>
  )
}
