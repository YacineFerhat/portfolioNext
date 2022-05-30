import { Button } from 'components'
export const Contact = () => {
  return (
    <div
      className="my-16 flex flex-col items-center justify-center rounded-3xl bg-c-blue p-12 text-white"
      id="contact"
    >
      <div className="text-lg font-bold lg:text-xl xl:text-2xl ">
        Wanna work together ? Contact me !
      </div>
      <div className="mt-8 flex items-center justify-between">
        <Button className="mr-4 rounded-lg bg-c-action p-2 font-bold text-black transition duration-700 ease-in-out hover:-translate-y-2">
          <a href="mailto: yacine.frhat@gmail.com">Email me</a>
        </Button>
        <Button className="mr-4 rounded-lg bg-c-l-green p-2 font-bold text-black transition duration-700 ease-in-out hover:-translate-y-2">
          <a href={`tel:+213699377273`}>Call me</a>
        </Button>
      </div>
    </div>
  )
}
