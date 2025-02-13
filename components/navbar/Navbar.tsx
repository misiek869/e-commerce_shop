import React from 'react'
import Container from '../global/Container'
import Logo from './Logo'
import NavbarSearch from './NavbarSearch'
import CartButton from './CartButton'
import ModeToggle from './DarkMode'
import LinksDropdown from './LinksDropdown'
import { Suspense } from 'react'

const Navbar = () => {
	return (
		<nav className='border-b'>
			<Container className='flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8 gap-4'>
				<Logo />
				<Suspense>
					<NavbarSearch />
				</Suspense>
				<div className='flex gap-4 items-center'>
					<CartButton />
					<ModeToggle />
					<LinksDropdown />
				</div>
			</Container>
		</nav>
	)
}

export default Navbar
