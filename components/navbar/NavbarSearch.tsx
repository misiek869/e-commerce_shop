import React from 'react'
import { Input } from '../ui/input'

const NavbarSearch = () => {
	return (
		<Input
			className='max-w-xs dark:bg-muted'
			type='search'
			placeholder='search for product...'></Input>
	)
}

export default NavbarSearch
