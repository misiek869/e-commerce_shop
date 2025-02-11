import { Button } from '@/components/ui/button'

import { faker } from '@faker-js/faker'
import FormInput from '@/components/form/FormInput'
import FormContainer from '@/components/form/FormContainer'
import { createProductAction } from '@/utils/actions'
import PriceInput from '@/components/form/PriceInput'
import ImageInput from '@/components/form/ImageInput'
import TextArea from '@/components/form/TextArea'
import CheckboxInput from '@/components/form/CheckboxInput'
import { SubmitButton } from '@/components/form/Buttons'

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
				<FormContainer action={createProductAction}>
					<div className='grid gap-4 md:grid-cols-2 my-4'>
						<FormInput
							type='text'
							name='name'
							label='product name'
							defaultValue={name}
						/>
						<FormInput
							type='text'
							name='company'
							label='company'
							defaultValue={company}
						/>
						<PriceInput />
						<ImageInput />
					</div>
					<TextArea
						name='description'
						labelText='product description'
						defaultValue={description}
					/>
					<div className='mt-6'>
						<CheckboxInput name='featured' label='featured' />
					</div>
					<SubmitButton text='add new product' className='mt-6' />
				</FormContainer>
			</div>
		</section>
	)
}

export default CreateProductPage
