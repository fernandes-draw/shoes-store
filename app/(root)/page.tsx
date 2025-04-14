import { Metadata } from 'next'
import sampleData from '@/db/sample-data'
import ProductsList from '@/components/shared/products/product-list'

export const metadata: Metadata = {
  title: `Home`,
}

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms))

const HomePage = async () => {
  await delay(1000)

  console.log(sampleData)

  return (
    <>
      <ProductsList
        data={sampleData.products}
        title='Latest Arrivals'
        limit={4}
      />
    </>
  )
}

export default HomePage
