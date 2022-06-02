import { Button, Modal } from 'components'
import { useState } from 'react'
import Link from 'next/link'
interface Props {
  data: any
}
export const ProjectCard = ({
  data: { title, picture, url, description },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleModal = (state: boolean) => {
    setIsOpen(state)
  }
  return (
    <div className="flex cursor-pointer  flex-col items-center rounded-3xl shadow-xl transition duration-700 ease-in-out hover:-translate-y-6">
      <img src={picture} className="rounded-lg" />
      <p className="mt-8 text-xl font-bold">{title}</p>
      <Button
        onClick={() => handleModal(true)}
        className="my-8 rounded-3xl border p-4 shadow-xl duration-300 hover:font-bold "
      >
        More infos
      </Button>
      <Modal isOpen={isOpen} handleClose={handleModal}>
        <p className="mb-2 text-xl font-bold">{title}</p>
        <p className="tracking-widest	"> {description}</p>{' '}
        {url !== '' && (
          <Button className="my-8 rounded-3xl border bg-c-action p-4 font-bold text-white shadow-xl ">
            <Link href={url} passHref={true}>
              Check it
            </Link>
          </Button>
        )}
      </Modal>
    </div>
  )
}
