import picture1 from 'assets/1.png'
import picture2 from 'assets/2 (2).png'
import picture3 from 'assets/3 (2).png'
import picture4 from 'assets/4 (2).png'
import picture5 from 'assets/5 (2).png'
import picture6 from 'assets/6.png'
import Link from 'next/link'

export const IconsHolder = () => {
  return (
    <div className="absolute w-full">
      <div className="relative h-full w-full">
        <Link href="https://reactjs.org">
          <img
            className="absolute top-4  right-1 w-16 animate-bounce cursor-pointer	 rounded-full duration-1000 md:w-20 xl:w-24"
            src={picture1.src}
            alt={picture1.blurDataURL}
          />
        </Link>
        <Link href="https://nextjs.org">
          <img
            src={picture2.src}
            className="absolute -top-10 right-32 flex w-12 animate-bounce rounded-full duration-1000 md:hidden md:w-16 lg:flex xl:w-20"
          />
        </Link>
        <div className="absolute top-40 -right-20 hidden  w-12  animate-bounce cursor-pointer items-center justify-center rounded-full bg-c-l-green p-2 duration-700 md:flex md:w-16 xl:w-20">
          <Link href="https://nodejs.org">
            <img src={picture4.src} alt={picture4.blurDataURL} />
          </Link>
        </div>{' '}
        <div className="absolute -top-12  left-20 flex w-16 animate-bounce cursor-pointer items-center justify-center rounded-full bg-black p-2 duration-1000 md:w-20 xl:w-28">
          <Link href="https://nestjs.com">
            <img src={picture3.src} alt={picture3.blurDataURL} />
          </Link>
        </div>{' '}
        <div className="absolute top-24  -left-10 flex w-12 animate-bounce cursor-pointer items-center justify-center rounded-full bg-c-b p-2 duration-500 md:w-16 xl:w-20">
          <Link href="https://www.mongodb.com">
            <img src={picture5.src} alt={picture5.blurDataURL} />
          </Link>
        </div>{' '}
        <Link href="https://www.typescriptlang.org">
          <img
            className="absolute -top-16 left-52 hidden w-12 animate-bounce cursor-pointer rounded-full duration-700 md:w-16 lg:w-20 xl:flex"
            src={picture6.src}
            alt={picture6.blurDataURL}
          />
        </Link>
      </div>{' '}
    </div>
  )
}
