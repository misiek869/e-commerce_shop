import { formatCurrency } from '@/utils/format'
import { Product } from '@prisma/client'
import Link from 'next/link'
import { Card, CardContent } from '../ui/card'

const ProductsGrid = ({ products }: { products: Product[] }) => {
	return (
		<div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
			{products.map(product => {
				const { name, price, image } = product
				const productId = product.id

				const dollars = formatCurrency(price)

				return (
					<article key={productId} className='group relative'>
						<Link href={`product/${productId}`}>
							<Card className='transform group-hover:shadow-xl transition-shadow duration-700'>
								<CardContent className='p-4'>
									<div className='relative h-64 md:h-48 rounded overflow-hidden'></div>
								</CardContent>
							</Card>
						</Link>
					</article>
				)
			})}
		</div>
	)
}

export default ProductsGrid
