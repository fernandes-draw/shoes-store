import { Metadata } from 'next'

export const metadata: Metadata = {
  title: `Home`,
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const HomePage = async () => {
  await delay(1000)

  return <>HomePage</>
}

export default HomePage
