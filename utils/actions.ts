const url: string = 'https://e-commerce-api-it0a.onrender.com/'

export const fetchFeaturedProducts = async () => {
	try {
		const response = await fetch(`${url}products?featured=true`)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const products = await response.json()
		return products
	} catch (error) {
		console.error('Error fetching featured products:', error)
		return []
	}
}

export const fetchAllProducts = async () => {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			throw new Error('Network response was not ok')
		}
		const products = await response.json()
		return products
	} catch (error) {
		console.error('Error fetching featured products:', error)
		return []
	}
}
