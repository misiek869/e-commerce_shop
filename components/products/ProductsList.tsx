import { formatCurrency } from '@/utils/format'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Product } from '@prisma/client'
import Image from 'next/image'
import FavoriteToggleButton from './FavoriteToggleButton'

const ProductsList = ({ products }: { products: Product[] }) => {
	return (
		<div className='mt-12 grid gap-y-8'>
			{products.map(product => {
				const { name, price, image, company } = product
				const productId = product.id

				const dollars = formatCurrency(price)

				return (
					<article key={productId} className='group relative'>
						<Link href={`products/${productId}`}>
							<Card className='transform group-hover:shadow-xl transition-shadow duration-700'>
								<CardContent className='p-4 gap-y-4 grid md:grid-cols-3'>
									<div className='relative h-64 md:h-48 '>
										<Image
											src={image}
											alt={name}
											fill
											sizes='(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw'
											priority
											className='rounded w-full object-cover'></Image>
									</div>
									<div className='ml-16'>
										<h2 className='text-xl capitalize'>{name}</h2>
										<h4 className='text-muted-foreground capitalize'>
											{company}
										</h4>
									</div>
									<p className='text-muted-foreground text-lg md:ml-auto'>
										{dollars}
									</p>
								</CardContent>
							</Card>
						</Link>
						<div className='absolute bottom-7 right-7 z-50'>
							<FavoriteToggleButton productId={productId} />
						</div>
					</article>
				)
			})}
		</div>
	)
}

export default ProductsList
