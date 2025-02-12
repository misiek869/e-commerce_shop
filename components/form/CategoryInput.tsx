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
					<SelectValue placeholder='Select a category' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='kitchen'>Kitchen</SelectItem>
						<SelectItem value='living room'>Living Room</SelectItem>
						<SelectItem value='bathroom'>Bathroom</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

export default CategoryInput
