import BreadCrumb from '@/components/single-product/BreadCrumb'
import { fetchSingleProduct } from '@/utils/actions'
import Image from 'next/image'
import { formatCurrency } from '@/utils/format'
import FavoriteToggleButton from '@/components/products/FavoriteToggleButton'
import AddToCart from '@/components/single-product/AddToCart'
import ProductRating from '@/components/single-product/ProductRating'

const SingleProductPage = async ({ params }: { params: { id: string } }) => {
	const { id } = params

	if (!id) {
		return <div>Nie znaleziono produktu.</div>
	}

	const product = await fetchSingleProduct({ productId: id })

	const { name, image, company, description, price } = product
	const dollars = formatCurrency(price)

	return (
		<section>
			<BreadCrumb name={name} />
			<div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
				<div className='relative h-full'>
					<Image
						src={image}
						alt={name}
						fill
						sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
						priority
						className='w-full rounded object-cover'
					/>
				</div>
				<div>
					<div className='flex gap-x-8 items-center'>
						<h1 className='capitalize text-3xl font-bold'>{name}</h1>
						<FavoriteToggleButton productId={params.id} />
					</div>
					<ProductRating productId={params.id} />
					<h4 className='text-xl mt-2'>{company}</h4>
					<p className='mt-3 text-md bg-muted inline-block p-2 rounded-md'>
						{dollars}
					</p>
					<p className='mt-6 leading-8 text-muted-foreground'>{description}</p>
					<AddToCart productId={params.id} />
				</div>
			</div>
		</section>
	)
}

export default SingleProductPage
