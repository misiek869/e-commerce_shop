import ProductsContainer from '@/components/products/ProductsContainer'

const ProductsPage = async ({
	searchParams,
}: {
	searchParams: { layout?: string; search?: string }
}) => {
	// const layout = searchParams.layout || 'grid'
	// const search = searchParams.search || ''

	const { layout = 'grid', search = '' } = await searchParams

	return <ProductsContainer layout={layout} search={search}></ProductsContainer>
}

export default ProductsPage
