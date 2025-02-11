'use client'
import { adminLinks } from '@/utils/links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const Sidebar = () => {
	const pathName = usePathname()

	return (
		<aside>
			{adminLinks.map((link, index) => {
				const isPageActive = pathName === link.href
				const pageVariant = isPageActive ? 'secondary' : 'ghost'

				return (
					<Button
						asChild
						key={index}
						className='w-full mb-2 capitalize font-normal justify-start'
						variant={pageVariant}>
						<Link href={link.href}>{link.label}</Link>
					</Button>
				)
			})}
		</aside>
	)
}

export default Sidebar
