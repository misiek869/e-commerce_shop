'use client'

import { TfiReload } from 'react-icons/tfi'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { SignInButton } from '@clerk/nextjs'
import { CiHeart } from 'react-icons/ci'
import { IoHeartSharp } from 'react-icons/io5'
import { LuTrash2, LuPenSquare } from 'react-icons/lu'

type buttonSize = 'default' | 'lg' | 'sm'

type SubmitButtonProps = {
	className?: string
	text?: string
	size?: btnSize
}

export const SubmitButton = ({
	className = '',
	text = 'submit',
	size = 'lg',
}: SubmitButtonProps) => {
	const { pending } = useFormStatus()

	return (
		<Button
			type='submit'
			disabled={pending}
			className={cn('capitalize', className)}
			size={size}>
			{pending ? (
				<>
					<TfiReload className='mr-2 h-4 w-4 animate-spin' />
					Wait...
				</>
			) : (
				text
			)}
		</Button>
	)
}

const Buttons = () => {
	return <div></div>
}

export default Buttons
