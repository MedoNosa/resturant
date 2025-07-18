import { featuredProducts } from '@/data'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import Price from '@/components/Price'

export const metadata = {
  title: 'PRODUCT PAGE',
};
export default async function ProductPage({
  params,
}: {
  params: { id: string }
}) {
  const productId = parseInt(params.id)
  const product = featuredProducts.find(p => p.id === productId)

  if (!product) return notFound()

  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>
      {product.img && (
        <div className='relative w-full h-1/2 md:h-[70%]'>
          <Image src={product.img} alt='' fill className='object-contain' />
        </div>
      )}
      <div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
        <h1 className='text-3xl font-bold uppercase xl:text-5xl'>{product.title}</h1>
        <p>{product.desc}</p>
        <Price price={product.price} id={product.id} option={product.options} />
      </div>
    </div>
  )
}
