import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { faker } from '@faker-js/faker'
import FormInput from '@/components/form/FormInput'

const addNewProductAction = async (formData: FormData) => {
	'use server'
	const name = formData.get('name') as String
	console.log(name)
}

const CreateProductPage = () => {
	const name = faker.commerce.productName()
	const company = faker.company.name()
	const description = faker.lorem.paragraph({ min: 10, max: 12 })

	return (
		<section className=''>
			<h1 className='text-2xl font-semibold mb-8 capitalize'>
				add new product
			</h1>
			<div className='border p-8 rounded-sm'>
				<form action={addNewProductAction}>
					<FormInput
						name='name'
						type='text'
						defaultValue={name}
						label='product name'
					/>
					<Button type='submit' size={'lg'}>
						Submit
					</Button>
				</form>
			</div>
		</section>
	)
}

export default CreateProductPage
