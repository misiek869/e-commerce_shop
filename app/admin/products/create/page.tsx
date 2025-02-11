const addNewProductAction = async (formData: FormData) => {
	'use server'
	const name = formData.get('name') as String
	console.log(name)
}

const CreateProductPage = () => {
	return (
		<section className=''>
			<h1 className='text-2xl font-semibold mb-8 capitalize'>
				add new product
			</h1>
			<div className='border p-8 rounded-sm'>
				<form action={addNewProductAction}>
					<div className='mb-2'></div>
				</form>
			</div>
		</section>
	)
}

export default CreateProductPage
