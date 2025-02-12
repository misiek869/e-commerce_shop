import { Label } from '../ui/label'
import { Input } from '../ui/input'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

const ColorInput = () => {
	return (
		<div className='mb-2'>
			<Select name='color'>
				<SelectTrigger>
					<SelectValue placeholder='Select a color' />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectItem value='brown'>Brown</SelectItem>
						<SelectItem value='black'>Black</SelectItem>
						<SelectItem value='blue'>Blue</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}

export default ColorInput
