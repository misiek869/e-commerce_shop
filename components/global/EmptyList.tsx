import { cn } from '@/lib/utils'

const EmptyList = ({
	heading = 'No items...',
	className,
}: {
	heading?: string
	className?: string
}) => {
	return <h2 className={cn('text-xl', className)}>{heading}</h2>
}

export default EmptyList
