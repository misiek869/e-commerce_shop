import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const CategoryInput = () => {
	return (
		<div className='mb-2'>
			<Select name='category'>
				<SelectTrigger>
					<SelectValue placeholder='Select a company' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='ikea'>Ikea</SelectItem>
						<SelectItem value='liddy'>Liddy</SelectItem>
						<SelectItem value='marcos'>Marcos</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

export default CategoryInput
