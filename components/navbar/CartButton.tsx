import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { FiShoppingCart } from 'react-icons/fi'

const CartButton = async () => {
	const numberOfCartItems = 3

	return (
		<Button
			asChild
			variant={'outline'}
			size={'icon'}
			className='flex justify-center items-center relative'>
			<Link href={'/cart'}>
				<FiShoppingCart />
				<span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm'>
					{numberOfCartItems}
				</span>
			</Link>
		</Button>
	)
}

export default CartButton
