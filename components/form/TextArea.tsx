import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type TextAreaProps = {
	name: string
	labelText?: string
	defaultValue?: string
}

const TextArea = ({ name, labelText, defaultValue }: TextAreaProps) => {
	return (
		<div className='mb-2'>
			<Label className='capitalize' htmlFor={name}>
				{labelText || name}
			</Label>
			<Textarea
				id={name}
				name={name}
				defaultValue={defaultValue}
				rows={5}
				required
				className='leading-loose'
			/>
		</div>
	)
}

export default TextArea
