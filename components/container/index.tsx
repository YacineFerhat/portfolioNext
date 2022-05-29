import { Footer, NavBar } from 'components'
import Head from 'next/head'

interface Props {
  children: any
}
export const Container = ({ children }: Props) => {
  return (
    <div className="font-nunito">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
