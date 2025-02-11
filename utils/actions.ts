'use server'

const url: string = 'https://e-commerce-api-it0a.onrender.com/'
import db from '@/utils/db'
import { currentUser } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'

const getAuthUser = async () => {
	const user = await currentUser()

	if (!user) redirect('/')
	return user
}

const renderError = (error: unknown): { message: string } => {
	console.log(error)
	return {
		message: error instanceof Error ? error.message : 'There was an error...',
	}
}

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

export const fetchAllProducts = async ({ search = '' }: { search: string }) => {
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

export const fetchSingleProduct = async ({
	productId,
}: {
	productId: string
}) => {
	const product = db.product.findUnique({
		where: {
			id: productId,
		},
	})

	if (!product) {
		redirect('/')
	}

	return product
}

export const createProductAction = async (
	prevState: any,
	formData: FormData
): Promise<{ message: string }> => {
	const user = await getAuthUser()

	try {
		const name = formData.get('name') as string
		const company = formData.get('company') as string
		const price = Number(formData.get('price') as string)

		// temp
		const image = formData.get('image') as File
		const description = formData.get('description') as string
		const featured = Boolean(formData.get('featured') as string)

		await db.product.create({
			data: {
				name,
				company,
				price,
				image: '/images/hero1.jpg',
				description,
				featured,
				// clerkId: user.id,
			},
		})

		return { message: 'added new product' }
	} catch (error) {
		return renderError(error)
	}
}
