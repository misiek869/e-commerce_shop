'use client'

import { useToast } from '@/hooks/use-toast'
import { SignOutButton } from '@clerk/nextjs'
import Link from 'next/link'

const SignOutLink = () => {
	const { toast } = useToast()

	const handleLogout = () => {
		toast({ description: 'You have just logged out' })
	}

	return (
		<SignOutButton>
			<Link className='w-full text-left' onClick={handleLogout} href={'/'}>
				Logout
			</Link>
		</SignOutButton>
	)
}

export default SignOutLink
