const url: string = 'https://e-commerce-api-it0a.onrender.com/'
import db from '@/utils/db'
// export const fetchFeaturedProducts = async () => {
// 	try {
// 		const response = await fetch(`${url}products?featured=true`)
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok')
// 		}
// 		const products = await response.json()
// 		return products
// 	} catch (error) {
// 		console.error('Error fetching featured products:', error)
// 		return []
// 	}
// }

export const fetchFeaturedProducts = async () => {
	const products = await db.product.findMany({
		where: {
			featured: true,
		},
	})
	return products
}

// export const fetchAllProducts = async () => {
// 	try {
// 		const response = await fetch(url)
// 		if (!response.ok) {
// 			throw new Error('Network response was not ok')
// 		}
// 		const products = await response.json()
// 		return products
// 	} catch (error) {
// 		console.error('Error fetching featured products:', error)
// 		return []
// 	}
// }

export const fetchAllProducts = ({ search = '' }: { search: string }) => {
	return db.product.findMany({
		where: {
			OR: [
				{ name: { contains: search, mode: 'insensitive' } },
				{ company: { contains: search, mode: 'insensitive' } },
			],
		},
		orderBy: {
			createdAt: 'desc',
		},
	})
}
