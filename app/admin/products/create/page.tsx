import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

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
					<div className='mb-2'>
						<Label htmlFor='name'>Product Name</Label>
						<Input id='name' name='name' type={'text'} />
					</div>
					<Button type='submit' size={'lg'}>
						Submit
					</Button>
				</form>
			</div>
		</section>
	)
}

export default CreateProductPage
