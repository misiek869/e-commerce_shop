import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
	DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu'
import { LuAlignLeft } from 'react-icons/lu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { links } from '@/utils/links'
import UserIcon from './UserIcon'
import { SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs'
import SignOutLink from './SignOutLink'
import { auth } from '@clerk/nextjs/server'

const LinksDropdown = async () => {
	const { userId } = await auth()

	const isAdmin = userId === process.env.ADMIN_ID
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant={'outline'} className='flex gap-4 max-w-[100px]'>
					<LuAlignLeft className='w-6 h-6' />
					<UserIcon />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-40' align='start' sideOffset={10}>
				<SignedOut>
					<DropdownMenuItem>
						<SignInButton mode='modal'>
							<button className='w-full text-left'>Sign In</button>
						</SignInButton>
					</DropdownMenuItem>
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignUpButton mode='modal'>
							<button className='w-full text-left'>Register</button>
						</SignUpButton>
					</DropdownMenuItem>
				</SignedOut>
				<SignedIn>
					{links.map((link, index) => {
						if (link.label === 'dashboard' && !isAdmin) {
							return null
						}

						return (
							<DropdownMenuItem key={index} className='capitalize w-full'>
								<Link href={link.href}>{link.label}</Link>
							</DropdownMenuItem>
						)
					})}
					<DropdownMenuSeparator />
					<DropdownMenuItem>
						<SignOutLink />
					</DropdownMenuItem>
				</SignedIn>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default LinksDropdown
