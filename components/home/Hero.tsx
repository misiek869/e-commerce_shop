import { Button } from '../ui/button'
import Link from 'next/link'
import HeroCarousel from './HeroCarousel'

const Hero = () => {
	return (
		<section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
			<div className=''>
				<h1 className='max-w-2xl font-bold text-4xl tracking-tight sm: text-6xl'>
					A new era of shopping – discover how easy it can be
				</h1>
				<p className='mt-8 max-w-xl text-lg leading-7 text-muted-foreground'>
					Welcome to a revolutionary shopping experience designed with you in
					mind. Say goodbye to long lines and complicated processes. With our
					user-friendly platform, you can explore a curated selection of
					products at your fingertips.
				</p>
				<Button asChild size={'lg'} className='mt-8'>
					<Link href={'/products'}>See Our Products</Link>
				</Button>
			</div>
			<HeroCarousel />
		</section>
	)
}

export default Hero
