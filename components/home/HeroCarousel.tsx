import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel'

import hero1 from '@/public/images/hero1.jpg'
import hero2 from '@/public/images/hero2.jpg'
import hero3 from '@/public/images/hero3.jpg'

const carouselImages = [hero1, hero2, hero3]

const HeroCarousel = () => {
	return (
		<div className='hidden lg:block'>
			<Carousel>
				<CarouselContent></CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	)
}

export default HeroCarousel
