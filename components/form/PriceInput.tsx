import { Label } from '../ui/label'
import { Input } from '../ui/input'

const name = 'price'

type PriceInputProps = {
	defaultValue?: number
}

const PriceInput = ({ defaultValue }: PriceInputProps) => {
	return (
		<div className='mb-2'>
			<Label htmlFor={name} className='capitalize'>
				Price ($)
			</Label>
			<Input
				id={name}
				type='number'
				name={name}
				required
				min={0}
				defaultValue={defaultValue || 100}
			/>
		</div>
	)
}

export default PriceInput
